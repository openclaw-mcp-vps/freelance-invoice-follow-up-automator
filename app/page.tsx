export default function Page() {
  const faqs = [
    {
      q: "How does the follow-up sequence work?",
      a: "After an invoice goes overdue, we automatically send a polite reminder on day 1, a firmer nudge on day 7, and a final notice on day 14 — all professionally worded so you never sound pushy."
    },
    {
      q: "Can I customize the email templates?",
      a: "Yes. Every email template is fully editable. You can adjust tone, timing, and include your own payment link or Stripe/PayPal URL."
    },
    {
      q: "What happens after I subscribe?",
      a: "You get instant access to the dashboard where you can add invoices, connect your email, and let the automator handle the awkward follow-ups for you."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers &amp; Consultants
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Chasing Payments.<br />
          <span className="text-[#58a6ff]">Let Automation Do It.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          InvoiceFollow automatically sends polite, escalating follow-up emails for your overdue invoices — so you get paid faster without the awkward conversations.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Start Automating — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to explore. Cancel anytime.</p>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to get paid on time</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited invoices tracked",
              "3-step escalating email sequences",
              "Custom email templates",
              "Payment link integration",
              "Dashboard &amp; status tracking",
              "Email delivery via Resend"
            ].map((feat) => (
              <li key={feat} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span dangerouslySetInnerHTML={{ __html: feat }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors duration-150"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} InvoiceFollow. All rights reserved.
      </footer>
    </main>
  );
}
