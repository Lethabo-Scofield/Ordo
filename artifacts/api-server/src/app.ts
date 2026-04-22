import express, { type Express } from "express";
import cors from "cors";
import * as PinoHttpModule from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

type PinoHttpFn = (opts: unknown) => (req: unknown, res: unknown, next?: () => void) => void;

const pinoHttp: PinoHttpFn =
  (PinoHttpModule as unknown as { pinoHttp?: PinoHttpFn }).pinoHttp ??
  (PinoHttpModule as unknown as { default?: PinoHttpFn }).default ??
  (PinoHttpModule as unknown as PinoHttpFn);

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: { id?: unknown; method: string; url?: string }) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: { statusCode: number }) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
