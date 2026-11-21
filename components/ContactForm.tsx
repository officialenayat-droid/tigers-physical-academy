"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { programmes } from "@/lib/content";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon, ArrowIcon } from "./ui/Icons";

type Errors = Partial<Record<"name" | "phone" | "programme", string>>;

const field =
  "peer w-full border-0 border-b border-cream/20 bg-transparent px-0 pb-3 pt-6 text-base text-cream placeholder-transparent transition-colors focus:border-gold-bright focus:outline-none focus:ring-0";
const lbl =
  "label pointer-events-none absolute left-0 top-6 text-[0.65rem] text-cream/45 transition-all peer-focus:top-0 peer-focus:text-gold-bright peer-[:not(:placeholder-shown)]:top-0";

/**
 * No backend yet: on submit we open WhatsApp with the enquiry pre-filled.
 * TODO: optionally POST to an API route / Formspree / Resend for email delivery.
 */
export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const programme = String(fd.get("programme") ?? "");
    const message = String(fd.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[+\d][\d\s-]{8,}$/.test(phone)) next.phone = "Enter a valid phone number.";
    if (!programme) next.programme = "Choose a programme.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const text = `Hi Tiger's Physical Academy!\n\nName: ${name}\nPhone: ${phone}\nProgramme: ${programme}${message ? `\nMessage: ${message}` : ""}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <div className="brackets relative border border-gold/15 bg-coal/80 p-6 backdrop-blur-sm sm:p-10">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div key="ok" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="py-10 text-center">
            <p className="label text-[0.7rem] text-gold-bright">Enquiry ready</p>
            <h3 className="mt-4 text-4xl font-bold">Roger that.</h3>
            <p className="mx-auto mt-4 max-w-sm text-cream/60">Your message opened in WhatsApp. Hit send there and the academy will get back to you.</p>
            <button type="button" onClick={() => setSent(false)} className="label mt-8 text-[0.65rem] text-gold-bright underline-offset-4 hover:underline">
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-7">
            <div className="grid gap-7 sm:grid-cols-2">
              <div className="relative">
                <input id="name" name="name" type="text" autoComplete="name" placeholder="Name" className={field} aria-invalid={!!errors.name} aria-describedby="name-err" />
                <label htmlFor="name" className={lbl}>Full name *</label>
                {errors.name && <p id="name-err" className="mt-2 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div className="relative">
                <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Phone" className={field} aria-invalid={!!errors.phone} aria-describedby="phone-err" />
                <label htmlFor="phone" className={lbl}>Phone *</label>
                {errors.phone && <p id="phone-err" className="mt-2 text-xs text-red-400">{errors.phone}</p>}
              </div>
            </div>

            <div className="relative">
              <label htmlFor="programme" className="label text-[0.65rem] text-cream/45">Programme *</label>
              <select id="programme" name="programme" defaultValue="" className="mt-2 w-full appearance-none border-0 border-b border-cream/20 bg-transparent px-0 pb-3 pt-2 text-base text-cream focus:border-gold-bright focus:outline-none focus:ring-0" aria-invalid={!!errors.programme}>
                <option value="" disabled className="bg-coal">Select a programme</option>
                {programmes.map((p) => (
                  <option key={p} value={p} className="bg-coal">{p}</option>
                ))}
              </select>
              <span aria-hidden className="pointer-events-none absolute bottom-4 right-1 h-2 w-2 rotate-45 border-b border-r border-gold-bright" />
              {errors.programme && <p className="mt-2 text-xs text-red-400">{errors.programme}</p>}
            </div>

            <div className="relative">
              <textarea id="message" name="message" rows={4} placeholder="Message" className={`${field} resize-none`} />
              <label htmlFor="message" className={lbl}>Message (optional)</label>
            </div>

            <button type="submit" className="group/btn label relative flex h-14 w-full items-center justify-center gap-3 overflow-hidden bg-gold-bright text-[0.75rem] text-ink clip-angle sm:w-auto sm:justify-self-start sm:px-10">
              <span className="absolute inset-0 origin-left scale-x-0 bg-cream transition-transform duration-500 ease-[var(--ease-cine)] group-hover/btn:scale-x-100" />
              <span className="relative flex items-center gap-3">
                <WhatsAppIcon className="h-5 w-5" /> Send Enquiry <ArrowIcon className="transition-transform group-hover/btn:translate-x-1" />
              </span>
            </button>
            <p className="-mt-3 text-xs text-cream/40">Opens WhatsApp with your details pre-filled. We never share your number.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
