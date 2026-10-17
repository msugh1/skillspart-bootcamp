import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import Accordion from "../components/ui/Accordion";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { SITE_CONFIG } from "../config/site";
import { GENERAL_FAQS } from "../data/faqs";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const field = "mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-navy placeholder:text-muted/60 focus:border-spark";

export default function ContactPage() {
  const { contactEmail, phone, location } = SITE_CONFIG;
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") ?? "").trim();
    const email = String(d.get("email") ?? "").trim();
    const topic = String(d.get("topic") ?? "");
    const message = String(d.get("message") ?? "").trim();
    const next: Errors = {};
    if (!name) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (message.length < 20) next.message = "Please write at least 20 characters so we can help.";
    setErrors(next);
    setSent(false);
    if (Object.keys(next).length || !contactEmail) return;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(`${topic}: message from ${name}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const err = (k: keyof Errors) =>
    errors[k] && <p id={`${k}-err`} className="mt-1.5 text-sm font-semibold text-red-700">{errors[k]}</p>;
  const aria = (k: keyof Errors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <>
      <PageHero eyebrow="Contact" title="Questions? Let us help.">
        Send us a message about applications, programmes or anything else. Your message opens in your own email app.
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1.4fr]">
        <aside className="h-fit rounded-2xl bg-mist p-8 text-navy">
          <h2 className="text-xl font-bold">Contact options</h2>
          <ul className="mt-5 space-y-4 text-ink">
            {contactEmail && <li className="flex gap-3"><Mail size={20} className="text-spark-dark" aria-hidden /><a href={`mailto:${contactEmail}`}>{contactEmail}</a></li>}
            {phone && <li className="flex gap-3"><Phone size={20} className="text-spark-dark" aria-hidden />{phone}</li>}
            {location && <li className="flex gap-3"><MapPin size={20} className="text-spark-dark" aria-hidden />{location}</li>}
            {!contactEmail && !phone && !location && <li>Contact details coming soon.</li>}
          </ul>
        </aside>

        <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl border border-line p-6 sm:p-8">
          <div>
            <label htmlFor="name" className="text-sm font-bold text-navy">Name</label>
            <input id="name" name="name" autoComplete="name" className={field} {...aria("name")} />
            {err("name")}
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-bold text-navy">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" className={field} {...aria("email")} />
            {err("email")}
          </div>
          <div>
            <label htmlFor="topic" className="text-sm font-bold text-navy">Topic</label>
            <select id="topic" name="topic" className={field}>
              <option>Application</option>
              <option>Programme question</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-bold text-navy">Message</label>
            <textarea id="message" name="message" rows={5} className={field} {...aria("message")} />
            {err("message")}
          </div>
          <button
            type="submit"
            disabled={!contactEmail}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-spark px-7 py-3 text-sm font-bold text-navy transition-colors hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:bg-mist disabled:text-muted"
          >
            Send by email
          </button>
          {!contactEmail && <p className="text-sm text-muted">Contact details coming soon. Sending is disabled until an email address is configured.</p>}
          {sent && <p role="status" className="text-sm font-semibold text-navy">Your email app should open with the message ready to send. We do not store what you type here.</p>}
        </form>
      </section>

      <section className="border-t border-line px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Common questions" title="Quick answers" />
          <div className="mt-8"><Accordion items={GENERAL_FAQS} /></div>
        </div>
      </section>
    </>
  );
}
