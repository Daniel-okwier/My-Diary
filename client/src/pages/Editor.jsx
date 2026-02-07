export default function Editor() {
  return (
    <section className="mt-16 mx-auto max-w-3xl px-4 sm:mt-20">
      {/* Header */}
      <header className="mb-8">
        <h1 className="font-diary text-4xl">
          Today’s Entry
        </h1>
        <p className="mt-2 text-muted-foreground text-sm">
          Write freely. Your memories are safe here.
        </p>
      </header>

      {/* Editor */}
      <div className="rounded-2xl border border-border bg-secondary p-6 shadow-sm">
        <textarea
          placeholder="Dear diary..."
          className="w-full min-h-[300px] resize-none bg-transparent font-diary text-lg leading-relaxed outline-none placeholder:text-muted-foreground"
        />
      </div>

      {/* Attachments */}
      <div className="mt-6 flex flex-wrap gap-3">
        <button className="rounded-full border border-border px-4 py-2 text-sm hover:bg-muted transition">
          📷 Image
        </button>
        <button className="rounded-full border border-border px-4 py-2 text-sm hover:bg-muted transition">
          🎙 Audio
        </button>
      </div>

      {/* Save */}
      <div className="mt-10 text-right">
        <button className="rounded-full bg-primary px-6 py-3 text-white hover:opacity-90 transition">
          Save entry
        </button>
      </div>
    </section>
  );
}
