export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify Analytics
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Find Why Customers<br />
          <span className="text-[#58a6ff]">Abandon at Checkout</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Analyze checkout abandonment patterns, pinpoint friction points like shipping costs, form fields, and payment methods — then act on clear conversion fixes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Recovering Revenue — $15/mo
        </a>
        <p className="text-xs text-[#8b949e] mt-3">For Shopify stores doing $10k+ monthly revenue</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <div className="border border-[#30363d] rounded-2xl p-8 bg-[#161b22] max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-start gap-2">
              <span className="text-[#58a6ff] mt-0.5">✓</span>
              Shopify webhook + GraphQL integration
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#58a6ff] mt-0.5">✓</span>
              Friction point detection (shipping, forms, payments)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#58a6ff] mt-0.5">✓</span>
              Visual abandonment dashboards
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#58a6ff] mt-0.5">✓</span>
              Actionable conversion recommendations
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#58a6ff] mt-0.5">✓</span>
              Background job processing & alerts
            </li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-5 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does it connect to my Shopify store?</h3>
            <p className="text-[#8b949e] text-sm">After subscribing, you install a lightweight Shopify app that registers webhooks and grants read-only GraphQL access to your checkout data. Setup takes under 5 minutes.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-5 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What friction points does it detect?</h3>
            <p className="text-[#8b949e] text-sm">It identifies drop-offs caused by unexpected shipping costs, too many form fields, missing payment methods, slow load times, and mobile UX issues — ranked by revenue impact.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-5 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Is my store data secure?</h3>
            <p className="text-[#8b949e] text-sm">Yes. We request only the minimum Shopify scopes needed, never store payment details, and all data is encrypted in transit and at rest.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
