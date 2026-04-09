"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Replace with Formspree/Web3Forms endpoint
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-purple-light">
          Get In Touch
        </h2>
        <h3 className="mb-16 text-center text-3xl font-bold md:text-4xl">
          <span className="text-gradient-purple">Contact Me</span>
        </h3>

        {submitted ? (
          <div className="rounded-xl border border-purple-primary/20 bg-surface p-8 text-center">
            <p className="text-lg font-semibold text-purple-light">Thanks for reaching out!</p>
            <p className="mt-2 text-sm text-text-muted">I&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-1.5 block text-sm text-text-muted">First Name *</label>
                <input id="firstName" name="firstName" required type="text" placeholder="First name"
                  className="w-full rounded-lg border border-purple-primary/20 bg-surface px-4 py-3 text-sm text-foreground placeholder-text-muted outline-none transition-colors focus:border-purple-primary" />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-1.5 block text-sm text-text-muted">Last Name</label>
                <input id="lastName" name="lastName" type="text" placeholder="Last name"
                  className="w-full rounded-lg border border-purple-primary/20 bg-surface px-4 py-3 text-sm text-foreground placeholder-text-muted outline-none transition-colors focus:border-purple-primary" />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-text-muted">Email *</label>
                <input id="email" name="email" required type="email" placeholder="you@example.com"
                  className="w-full rounded-lg border border-purple-primary/20 bg-surface px-4 py-3 text-sm text-foreground placeholder-text-muted outline-none transition-colors focus:border-purple-primary" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm text-text-muted">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="Phone number"
                  className="w-full rounded-lg border border-purple-primary/20 bg-surface px-4 py-3 text-sm text-foreground placeholder-text-muted outline-none transition-colors focus:border-purple-primary" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-text-muted">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Feel free to outline your ideas or needs..."
                className="w-full resize-none rounded-lg border border-purple-primary/20 bg-surface px-4 py-3 text-sm text-foreground placeholder-text-muted outline-none transition-colors focus:border-purple-primary" />
            </div>
            <button type="submit"
              className="w-full rounded-lg bg-purple-primary px-6 py-3 text-sm font-medium text-white transition-all hover:bg-purple-dark hover:shadow-lg hover:shadow-purple-primary/25">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
