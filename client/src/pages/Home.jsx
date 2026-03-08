import { motion } from "framer-motion"

export default function Home() {

  return (

    <div className="bg-app min-h-screen">

      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 py-28 text-center">

        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="text-5xl md:text-6xl font-diary font-bold leading-tight mb-6"
        >

          Capture your thoughts.
          <br />

          <span className="text-primary">
            Understand your life.
          </span>

        </motion.h1>


        <motion.p
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.8}}
          className="text-lg text-muted max-w-2xl mx-auto mb-10"
        >

          MyDiary is a modern journaling platform designed to help you reflect,
          organize your memories, and uncover insights about your personal growth.

        </motion.p>


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
            View Timeline
          </a>

        </div>

      </section>


      {/* FEATURES */}

      <section className="max-w-6xl mx-auto px-6 pb-32 grid md:grid-cols-3 gap-8">

        <Feature
          title="Private Journaling"
          text="Capture your thoughts and experiences in a secure and private environment."
        />

        <Feature
          title="AI Reflection"
          text="Understand patterns in your life through AI generated reflections."
        />

        <Feature
          title="Life Timeline"
          text="Visualize your memories and milestones across time."
        />

      </section>

    </div>

  )
}


function Feature({title,text}) {

  return (

    <div className="bg-surface border border-border rounded-xl p-6 shadow-soft">

      <h3 className="font-semibold text-lg mb-2">
        {title}
      </h3>

      <p className="text-muted">
        {text}
      </p>

    </div>

  )

}