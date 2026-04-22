import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Dev-only middleware that mounts the Vercel-style serverless functions in
// `./api/*.ts` onto the Vite dev server, so forms work in local preview.
function devApiPlugin(): Plugin {
  return {
    name: "ordo-dev-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url || !req.url.startsWith("/api/")) return next();
        const route = req.url.split("?")[0].replace(/^\/api\//, "");
        const file = path.resolve(
          import.meta.dirname,
          "api",
          `${route}.ts`,
        );
        try {
          const mod = await server.ssrLoadModule(file);
          const handler = mod.default as (req: unknown, res: unknown) => Promise<void>;
          if (typeof handler !== "function") return next();
          // Collect body for POST
          const chunks: Buffer[] = [];
          req.on("data", (c) => chunks.push(c));
          req.on("end", async () => {
            const raw = Buffer.concat(chunks).toString("utf8");
            (req as unknown as { body: unknown }).body = raw
              ? (() => {
                  try {
                    return JSON.parse(raw);
                  } catch {
                    return raw;
                  }
                })()
              : {};
            const resAny = res as unknown as {
              statusCode: number;
              status: (n: number) => typeof resAny;
              setHeader: (k: string, v: string) => void;
              end: (b?: string) => void;
              json: (o: unknown) => void;
            };
            resAny.status = (n: number) => {
              resAny.statusCode = n;
              return resAny;
            };
            resAny.json = (o: unknown) => {
              resAny.setHeader("Content-Type", "application/json");
              resAny.end(JSON.stringify(o));
            };
            try {
              await handler(req, res);
            } catch (err) {
              console.error("[dev-api] handler error:", err);
              if (!res.writableEnded) {
                resAny.status(500).json({ ok: false, error: "Dev handler error" });
              }
            }
          });
        } catch (err) {
          console.error(`[dev-api] failed to load ${file}:`, err);
          next();
        }
      });
    },
  };
}

// PORT and BASE_PATH are injected by the Replit runtime.
// On Vercel (or anywhere else) they're optional and we fall back to sensible defaults.
const rawPort = process.env.PORT ?? "5173";
const port = Number(rawPort);
if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    devApiPlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
