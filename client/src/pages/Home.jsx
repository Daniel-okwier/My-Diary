export default function Home() {
  return (
    <div className="bg-app min-h-screen">

      <section className="max-w-6xl mx-auto px-6 py-24 text-center">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Your private space
          <br />
          to <span className="text-primary">think, reflect, and grow</span>
        </h1>

        <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-10">
          MyDiary is a modern journaling platform designed for thinkers,
          builders, and creators. Capture your daily experiences, track
          personal growth, and unlock insights with powerful AI reflections.
        </p>

        <div className="flex justify-center gap-4">

          <a
            href="/signup"
            className="px-6 py-3 rounded-xl bg-primary text-black font-medium"
          >
            Start Writing
          </a>

          <a
            href="/timeline"
            className="px-6 py-3 rounded-xl border border-border"
          >
            See Demo
          </a>

        </div>

      </section>

      {/* FEATURES */}

      <section className="max-w-6xl mx-auto px-6 pb-32 grid md:grid-cols-3 gap-8">

        <Feature
          title="Private Journaling"
          text="Your thoughts remain yours. Secure and private diary entries designed for clarity and reflection."
        />

        <Feature
          title="AI Reflection"
          text="AI analyzes your entries to reveal patterns, emotions, and insights you might miss."
        />

        <Feature
          title="Timeline Memory"
          text="Revisit memories with a beautiful chronological timeline of your life experiences."
        />

      </section>

    </div>
  )
}

function Feature({ title, text }) {
  return (
    <div className="bg-[var(--bg-secondary)] border border-border rounded-xl p-6">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-[var(--text-muted)]">{text}</p>
    </div>
  )
}