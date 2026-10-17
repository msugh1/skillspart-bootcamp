import { useState, type FormEvent } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import { SITE_CONFIG } from "../config/site";

type FormErrors = Partial<Record<"name" | "email" | "age" | "access" | "consent", string>>;
const fieldClass = "mt-2 block w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-navy placeholder:text-muted focus:border-spark focus:outline-none focus:ring-2 focus:ring-spark/30";

export default function ApplyPage() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!SITE_CONFIG.applicationsOpen || status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const age = String(data.get("age") || "");
    const access = String(data.get("access") || "");
    const consent = data.get("consent") === "on";
    const guardian = data.get("guardian") === "on";
    const next: FormErrors = {};
    if (name.length < 2 || name.length > 100) next.name = "Enter your full name (2–100 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!["under18", "adult"].includes(age)) next.age = "Select your age group.";
    if (!["smartphone", "laptop", "both"].includes(access)) next.access = "Select a device option.";
    if (!consent || (age === "under18" && !guardian)) next.consent = "Please confirm the required declarations.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("sending");
    try {
      const response = await fetch(SITE_CONFIG.applicationEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error("The application could not be submitted.");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero eyebrow="Applications" title="Start with a spark.">
        SkillSpark is preparing its free 6–8 week online bootcamp for students from underserved communities across Nigeria.
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-spark-dark">Inaugural intake</p>
          <h2 className="text-3xl font-bold text-navy">Cybersecurity comes first.</h2>
          <p className="mt-4 leading-relaxed text-muted">IT Support and IT Automation are also part of the wider SkillSpark plan. Specific dates and enrollment availability will be announced for each track.</p>
          <div className="mt-8 rounded-2xl border border-line bg-mist p-6">
            <h3 className="flex items-center gap-2 font-bold text-navy"><ShieldCheck size={20} aria-hidden /> Applications and safety</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink">Joining is free. Applying is not a guarantee of a place, a certificate or external platform access. Never send passwords or payment information through the application form.</p>
          </div>
          <p className="mt-6 text-sm text-muted">Questions? Email <a className="font-semibold text-navy underline decoration-spark underline-offset-4" href={"mailto:" + SITE_CONFIG.contactEmail}>{SITE_CONFIG.contactEmail}</a>.</p>
        </div>
        <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-9">
          {!SITE_CONFIG.applicationsOpen ? (
            <div role="status">
              <span className="inline-block rounded-full bg-mist px-4 py-2 text-xs font-bold text-navy">Applications opening soon</span>
              <h2 className="mt-5 text-2xl font-bold">Registration is not open yet.</h2>
              <p className="mt-3 leading-relaxed text-muted">The application system is being prepared. We are not collecting applicant details on this page until the official submission process is configured and announced.</p>
              <p className="mt-5 text-sm text-muted">Follow official updates and return when the intake is announced.</p>
            </div>
          ) : status === "sent" ? (
            <div role="status" aria-live="polite">
              <CheckCircle2 size={42} className="text-spark-dark" aria-hidden />
              <h2 className="mt-4 text-2xl font-bold">Application submitted</h2>
              <p className="mt-3 leading-relaxed text-muted">Your form was accepted by our submission provider. This is not an admission confirmation. Watch your email for official next steps.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-5">
              <div>
                <h2 className="text-2xl font-bold">Cybersecurity application</h2>
                <p className="mt-2 text-sm text-muted">Please provide accurate details. Fields marked * are required.</p>
              </div>
              <div><label className="text-sm font-bold text-navy" htmlFor="apply-name">Full name *</label><input className={fieldClass} id="apply-name" name="name" autoComplete="name" maxLength={100} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} required />{errors.name && <p id="name-error" className="mt-1 text-sm text-red-700">{errors.name}</p>}</div>
              <div><label className="text-sm font-bold text-navy" htmlFor="apply-email">Email address *</label><input className={fieldClass} id="apply-email" name="email" type="email" autoComplete="email" maxLength={200} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} required />{errors.email && <p id="email-error" className="mt-1 text-sm text-red-700">{errors.email}</p>}</div>
              <div><label className="text-sm font-bold text-navy" htmlFor="apply-school">School or community (optional)</label><input className={fieldClass} id="apply-school" name="school" maxLength={150} /></div>
              <div><label className="text-sm font-bold text-navy" htmlFor="apply-age">Age group *</label><select className={fieldClass} id="apply-age" name="age" defaultValue="" aria-invalid={!!errors.age} required><option value="" disabled>Select an option</option><option value="under18">Under 18</option><option value="adult">18 or older</option></select>{errors.age && <p className="mt-1 text-sm text-red-700">{errors.age}</p>}</div>
              <div><label className="text-sm font-bold text-navy" htmlFor="apply-access">Device available for learning *</label><select className={fieldClass} id="apply-access" name="access" defaultValue="" aria-invalid={!!errors.access} required><option value="" disabled>Select an option</option><option value="smartphone">Smartphone</option><option value="laptop">Laptop or desktop</option><option value="both">Both</option></select>{errors.access && <p className="mt-1 text-sm text-red-700">{errors.access}</p>}</div>
              <div><label className="text-sm font-bold text-navy" htmlFor="apply-why">Why do you want to learn cybersecurity? (optional)</label><textarea className={fieldClass} id="apply-why" name="motivation" rows={4} maxLength={800} /></div>
              <input type="hidden" name="programme" value="Cybersecurity" />
              <div className="space-y-3 text-sm text-ink">
                <label className="flex items-start gap-3"><input type="checkbox" name="consent" className="mt-1 accent-spark" /> <span>I agree to submit these details for SkillSpark application review, as described in the <a href="/privacy" className="font-bold underline decoration-spark underline-offset-4">privacy notice</a>. *</span></label>
                <label className="flex items-start gap-3"><input type="checkbox" name="guardian" className="mt-1 accent-spark" /> <span>If I am under 18, I confirm that a parent or guardian has approved this application.</span></label>
                {errors.consent && <p role="alert" className="text-red-700">{errors.consent}</p>}
              </div>
              {status === "error" && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">Submission failed. Your application has not been confirmed. Please try again later or contact SkillSpark.</p>}
              <button disabled={status === "sending"} type="submit" className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-spark px-6 py-3 font-bold text-navy hover:bg-navy hover:text-white disabled:cursor-wait disabled:opacity-60">{status === "sending" ? "Submitting…" : "Submit application"}</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
