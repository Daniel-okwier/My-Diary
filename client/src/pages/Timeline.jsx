import { useState } from "react";
import EntryRead from "./EntryRead";

const entries = [
  {
    id: 1,
    date: "2026-02-01",
    title: "A quiet morning",
    excerpt:
      "The sun rose softly today, and for a moment the world felt kind...",
    content:
      "The sun rose softly today, and for a moment the world felt kind.\n\nI sat by the window, listening to the city breathe. There was no rush, no weight — just presence.",
    image: null,
    audio: null,
  },
  {
    id: 2,
    date: "2026-01-28",
    title: "Voices of the past",
    excerpt:
      "I heard laughter that reminded me of things I almost forgot...",
    content:
      "I heard laughter that reminded me of things I almost forgot.\n\nMemories have a strange way of returning when you least expect them.",
    image: null,
    audio: null,
  },
];

export default function Timeline() {
  const [selectedEntry, setSelectedEntry] = useState(null);

  if (selectedEntry) {
    return (
      <EntryRead
        entry={selectedEntry}
        onBack={() => setSelectedEntry(null)}
      />
    );
  }

  return (
    <section className="mt-16 mx-auto max-w-3xl px-4 sm:mt-20">
      {/* Header */}
      <header className="mb-8 text-center sm:mb-12">
        <h1 className="font-diary text-4xl">
          Your Memories
        </h1>
        <p className="mt-3 text-muted-foreground">
          A chronological collection of your life’s moments.
        </p>
      </header>

      {/* Timeline */}
      <div className="space-y-8">
        {entries.map((entry) => (
          <article
            key={entry.id}
            onClick={() => setSelectedEntry(entry)}
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
