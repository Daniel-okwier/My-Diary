export default function EntryRead({ entry, onBack }) {
  if (!entry) return null;

  return (
    <section className="mt-20 mx-auto max-w-3xl px-4">
      {/* Back */}
      <button
        onClick={onBack}
        className="mb-8 text-sm text-muted-foreground hover:text-primary transition"
      >
        ← Back to memories
      </button>

      {/* Entry container */}
      <article className="rounded-2xl border border-border bg-secondary p-8 shadow-sm">
        {/* Date */}
        <time className="block text-xs uppercase tracking-wide text-muted-foreground">
          {new Date(entry.date).toDateString()}
        </time>

        {/* Title */}
        <h1 className="mt-4 font-diary text-4xl leading-tight">
          {entry.title}
        </h1>

        {/* Content */}
        <div className="mt-8 space-y-6 font-diary text-lg leading-relaxed text-primary">
          {entry.content.split("\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Media */}
        {(entry.image || entry.audio) && (
          <div className="mt-10 space-y-6">
            {entry.image && (
              <img
                src={entry.image}
                alt="Diary memory"
                className="rounded-xl border border-border"
              />
            )}

            {entry.audio && (
              <audio
                controls
                className="w-full"
                src={entry.audio}
              />
            )}
          </div>
        )}
      </article>
    </section>
  );
}
