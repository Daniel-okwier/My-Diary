// src/pages/Timeline.jsx

const entries = [
  {
    id: 1,
    date: "2026-02-01",
    title: "A quiet morning",
    excerpt:
      "The sun rose softly today, and for a moment the world felt kind. I sat still, listening to the city breathe.",
  },
  {
    id: 2,
    date: "2026-01-28",
    title: "Voices of the past",
    excerpt:
      "I heard laughter that reminded me of things I almost forgot. Memories have a strange way of returning.",
  },
  {
    id: 3,
    date: "2026-01-20",
    title: "A heavy evening",
    excerpt:
      "Some days sit heavier on the heart than others. Tonight was one of those nights.",
  },
];

export default function Timeline() {
  return (
    <section className="mt-20 mx-auto max-w-3xl px-4">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="font-diary text-4xl">
          Your Memories
        </h1>
        <p className="mt-3 text-muted-foreground">
          A chronological collection of your life’s moments.
        </p>
      </header>

      {/* Timeline entries */}
      <div className="space-y-8">
        {entries.map((entry) => (
          <article
            key={entry.id}
            className="cursor-pointer rounded-2xl border border-border bg-secondary p-6 transition hover:shadow-md"
          >
            <time className="text-xs uppercase tracking-wide text-muted-foreground">
              {new Date(entry.date).toDateString()}
            </time>

            <h2 className="mt-2 font-diary text-2xl">
              {entry.title}
            </h2>

            <p className="mt-3 leading-relaxed text-muted-foreground">
              {entry.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
