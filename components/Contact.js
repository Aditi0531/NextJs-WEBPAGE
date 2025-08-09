export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 py-16">
      <h2 className="text-2xl font-bold">Contact</h2>
      <div className="mt-6 max-w-md">
        <form className="grid gap-3">
          <input className="p-3 border rounded" placeholder="Your name" />
          <input className="p-3 border rounded" placeholder="Email" />
          <textarea className="p-3 border rounded" rows="5" placeholder="Message" />
          <button type="submit" className="px-4 py-3 bg-indigo-600 text-white rounded">Send message</button>
        </form>
      </div>
    </section>
  )
}