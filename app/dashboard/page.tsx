const metrics = [
  { label: "Total Sales", value: "₹42,500" },
  { label: "Pending", value: "₹12,400" },
  { label: "Invoices", value: "24" },
  { label: "Customers", value: "8" }
];

export default function DashboardPage() {
  return (
    <main className="page-shell">
      <section className="container">
        <p className="eyebrow">Dashboard</p>
        <h1>Good morning 👋</h1>
        <div className="grid">
          {metrics.map((metric) => (
            <article className="metric" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </article>
          ))}
        </div>
        <div className="actions">
          <a className="button primary" href="/invoices/new">+ Create Invoice</a>
          <a className="button secondary" href="/ai">🤖 Ask Billty AI</a>
        </div>
      </section>
    </main>
  );
}
