const features = [
  "AI invoice and quotation drafts",
  "GST-aware totals and round-off",
  "PDF generation and e-signature",
  "Customer and product catalogues"
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="container hero">
        <div>
          <p className="eyebrow">Billty AI</p>
          <h1>Your AI business assistant for billing.</h1>
          <p className="lede">
            Type or speak what you need, review the generated bill or document, e-sign it,
            then download or share it with your customer.
          </p>
          <div className="actions">
            <a className="button primary" href="/dashboard">Start Free</a>
            <a className="button secondary" href="#features">View MVP plan</a>
          </div>
        </div>
        <div className="card">
          <p className="eyebrow">Try Billty</p>
          <h2>“Make an invoice for Rahul Enterprises. 10 shirts at ₹450 each, GST 18%.”</h2>
          <p className="lede">Billty converts natural language into structured invoice data for review.</p>
        </div>
      </section>
      <section id="features" className="container grid" style={{ marginTop: 48 }}>
        {features.map((feature) => (
          <div className="metric" key={feature}><span>{feature}</span></div>
        ))}
      </section>
    </main>
  );
}
