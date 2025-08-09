export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-12 border-t mt-12">
      <div className="max-w-6xl mx-auto text-sm text-slate-500 flex justify-between">
        <div>© {new Date().getFullYear()} Aditi Mishra</div>
        <div>Built with Next.js & Tailwind</div>
      </div>
    </footer>
  )
}