import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const mockEntries = [
  {
    id: 1,
    date: "March 18, 2026",
    title: "A productive day",
    mood: "🙂",
    preview: "Today I made great progress on my diary app...",
    hasAudio: true,
    hasImage: true
  },
  {
    id: 2,
    date: "March 17, 2026",
    title: "Feeling reflective",
    mood: "😐",
    preview: "Spent some time thinking about my goals...",
    hasAudio: false,
    hasImage: false
  },
  {
    id: 3,
    date: "March 16, 2026",
    title: "Tough day",
    mood: "😔",
    preview: "Work was exhausting today but I learned something important...",
    hasAudio: true,
    hasImage: false
  }
]

export default function Timeline() {

  const navigate = useNavigate()

  return (

    <div className="max-w-3xl mx-auto space-y-6">

      <h1 className="text-3xl font-diary">
        Your Timeline
      </h1>

      <div className="relative">

        {/* Timeline vertical line */}

        <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-border"/>

        <div className="space-y-6">

          {mockEntries.map((entry) => (

            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex gap-4"
            >

              {/* timeline dot */}

              <div className="w-6 h-6 rounded-full bg-primary mt-3"/>

              <Card
                className="flex-1 cursor-pointer hover:shadow-md transition"
                onClick={() => navigate(`/entry/${entry.id}`)}
              >

                <CardContent className="p-5 space-y-2">

                  <div className="flex justify-between items-center">

                    <h2 className="text-lg font-semibold">
                      {entry.title}
                    </h2>

                    <span className="text-xl">
                      {entry.mood}
                    </span>

                  </div>

                  <p className="text-sm text-muted">
                    {entry.date}
                  </p>

                  <p className="text-sm text-muted">
                    {entry.preview}
                  </p>

                  <div className="flex gap-3 text-xs text-muted pt-1">

                    {entry.hasAudio && (
                      <span>🎤 Audio</span>
                    )}

                    {entry.hasImage && (
                      <span>🖼 Image</span>
                    )}

                  </div>

                </CardContent>

              </Card>

            </motion.div>

          ))}

        </div>

      </div>

    </div>

  )

}