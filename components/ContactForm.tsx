'use client';

import { FormEvent, useState } from 'react';
import { site } from '@/lib/siteData';

export default function ContactForm() {
  const [status,setStatus] = useState('');
  async function submit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus('Sending…');
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const r = await fetch('/api/contact',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || 'Unable to send');
      setStatus('Thank you. Your message has been sent.'); form.reset();
    } catch {
      setStatus(`Message delivery is not configured in this local build. Please email ${site.email}.`);
    }
  }
  return <form className="contact-form" onSubmit={submit}>
    <label><span>Your Name *</span><input name="name" required autoComplete="name"/></label>
    <label><span>Your Email *</span><input name="email" type="email" required autoComplete="email"/></label>
    <label><span>Phone *</span><input name="phone" type="tel" required autoComplete="tel"/></label>
    <label><span>Project type *</span><select name="projectType" required defaultValue=""><option value="" disabled>Select a service</option><option>Single Family</option><option>Municipal</option><option>Stormwater</option><option>Site</option><option>GIS</option><option>Survey</option><option>Other</option></select></label>
    <label className="full"><span>Message / Comments *</span><textarea name="message" required rows={7}/></label>
    <button className="button primary" type="submit">Send Message</button>
    <p className="form-status" role="status">{status}</p>
  </form>
}
