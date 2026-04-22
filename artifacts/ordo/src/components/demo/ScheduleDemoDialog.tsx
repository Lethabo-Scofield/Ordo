import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, X } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 120;
const MAX_COMPANY = 200;
const MAX_USE_CASE = 200;
const MAX_MESSAGE = 4000;

const TEAM_SIZES = ["1-10", "11-50", "51-200", "201-1000", "1000+"];

interface FormState {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  useCase: string;
  message: string;
}

const EMPTY: FormState = {
  name: "",
  email: "",
  company: "",
  teamSize: "",
  useCase: "",
  message: "",
};

export const OPEN_DEMO_EVENT = "ordo:open-demo";

export function openDemoDialog() {
  window.dispatchEvent(new Event(OPEN_DEMO_EVENT));
}

export function ScheduleDemoDialog() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onOpen = () => {
      setForm(EMPTY);
      setError(null);
      setSuccess(false);
      setOpen(true);
    };
    window.addEventListener(OPEN_DEMO_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_DEMO_EVENT, onOpen);
  }, []);

  // Autofocus the first field after the dialog opens
  useEffect(() => {
    if (open && !success) {
      const t = window.setTimeout(() => firstFieldRef.current?.focus(), 80);
      return () => window.clearTimeout(t);
    }
  }, [open, success]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !submitting) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, submitting]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setError(null);

    const name = form.name.trim();
    const email = form.email.trim();
    const company = form.company.trim();

    if (!name || !email || !company) {
      setError("Please fill in your name, work email and company.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setError("Please enter a valid work email address.");
      return;
    }
    if (
      name.length > MAX_NAME ||
      company.length > MAX_COMPANY ||
      form.useCase.length > MAX_USE_CASE ||
      form.message.length > MAX_MESSAGE
    ) {
      setError("One of your entries is too long. Please shorten it.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/schedule-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, name, email, company }),
      });
      const ct = res.headers.get("content-type") || "";
      const data = ct.includes("application/json")
        ? ((await res.json().catch(() => ({}))) as { ok?: boolean; error?: string })
        : null;

      if (!data || !res.ok || !data.ok) {
        setError("Waitlist full, try again later.");
        setSubmitting(false);
        return;
      }
      setSuccess(true);
    } catch {
      setError("Waitlist full, try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={() => !submitting && setOpen(false)}
            aria-hidden
          />

          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="schedule-demo-title"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-white rounded-[24px] shadow-2xl overflow-hidden border border-border/50"
          >
            {/* Painterly accent header */}
            <div
              className="relative h-24 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/footer-bg.png')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
              <button
                type="button"
                onClick={() => !submitting && setOpen(false)}
                aria-label="Close"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow-sm flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors backdrop-blur-sm"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="px-6 sm:px-8 pb-7 -mt-6">
              {success ? (
                <div className="text-center py-6">
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-5"
                  >
                    <CheckCircle2 className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold tracking-tight mb-2">
                    Request received
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Thanks {form.name.split(" ")[0]}! We'll be in touch within
                    one business day to lock in a time.
                  </p>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center bg-foreground text-background px-6 py-2.5 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-5">
                    <h3
                      id="schedule-demo-title"
                      className="text-2xl sm:text-[26px] font-semibold tracking-tight leading-tight mb-1.5"
                    >
                      Schedule a demo
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Tell us a bit about your team and we'll set up a 30-minute
                      walkthrough.
                    </p>
                  </div>

                  <form onSubmit={submit} className="flex flex-col gap-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <Field label="Full name" required>
                        <input
                          ref={firstFieldRef}
                          type="text"
                          autoComplete="name"
                          required
                          maxLength={MAX_NAME}
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          className={inputCls}
                          placeholder="Jane Cooper"
                        />
                      </Field>
                      <Field label="Work email" required>
                        <input
                          type="email"
                          autoComplete="email"
                          required
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          className={inputCls}
                          placeholder="jane@company.com"
                        />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <Field label="Company" required>
                        <input
                          type="text"
                          autoComplete="organization"
                          required
                          maxLength={MAX_COMPANY}
                          value={form.company}
                          onChange={(e) => update("company", e.target.value)}
                          className={inputCls}
                          placeholder="Acme Inc."
                        />
                      </Field>
                      <Field label="Team size">
                        <select
                          value={form.teamSize}
                          onChange={(e) => update("teamSize", e.target.value)}
                          className={`${inputCls} appearance-none bg-no-repeat bg-[right_0.75rem_center] pr-9`}
                          style={{
                            backgroundImage:
                              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
                          }}
                        >
                          <option value="">Select</option>
                          {TEAM_SIZES.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <Field label="Primary use case">
                      <input
                        type="text"
                        maxLength={MAX_USE_CASE}
                        value={form.useCase}
                        onChange={(e) => update("useCase", e.target.value)}
                        className={inputCls}
                        placeholder="e.g. Automating compliance reviews"
                      />
                    </Field>

                    <Field label="Anything we should know?">
                      <textarea
                        rows={3}
                        maxLength={MAX_MESSAGE}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        className={`${inputCls} resize-none min-h-[88px]`}
                        placeholder="Tools you use, current pain points, timing..."
                      />
                    </Field>

                    {error && (
                      <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-3.5 py-2.5">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="mt-1 inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors disabled:opacity-70"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending request
                        </>
                      ) : (
                        "Request a demo"
                      )}
                    </button>

                    <p className="text-[11px] leading-relaxed text-muted-foreground text-center mt-1">
                      By submitting, you agree to be contacted about Ordo. We
                      never share your details.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const inputCls =
  "w-full px-3.5 py-2.5 rounded-xl bg-white border border-border/70 text-[14px] text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-foreground/60 focus:ring-2 focus:ring-foreground/10 transition-colors";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[12.5px] font-medium text-foreground/80">
        {label}
        {required && <span className="text-foreground/40 ml-0.5">*</span>}
      </span>
      {children}
    </label>
  );
}
