const projects = [
  {
    id: 1,
    title: 'E-commerce UI',
    desc: 'Product listing and checkout flow with performance-first approach',
    tags: ['Next.js', 'Tailwind', 'Stripe']
  },
  {
    id: 2,
    title: 'Portfolio Website',
    desc: 'Minimal portfolio with CMS integration',
    tags: ['React', 'MDX']
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    desc: 'Admin dashboard & Analytics',
    tags: ['Charting', 'Auth']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-16">
      <h2 className="text-2xl font-bold">Selected Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(p => (
          <article key={p.id} className="p-6 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-slate-600">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="text-xs px-2 py-1 border rounded">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}