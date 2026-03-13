import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import { getEntries } from "@/services/entryService"

import { Card, CardContent } from "@/components/ui/card"

export default function Timeline() {

  const navigate = useNavigate()

  const [entries, setEntries] = useState([])

  useEffect(() => {

    const fetchEntries = async () => {

      try {

        const data = await getEntries()

        setEntries(data)

      } catch (err) {

        console.error(err)

      }

    }

    fetchEntries()

  }, [])

  return (

    <div className="max-w-3xl mx-auto space-y-6">

      <h1 className="text-3xl font-diary">
        Your Timeline
      </h1>

      <div className="relative">

        <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-border"/>

        <div className="space-y-6">

          {entries.map((entry) => (

            <motion.div
              key={entry._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4"
            >

              <div className="w-6 h-6 rounded-full bg-primary mt-3"/>

              <Card
                className="flex-1 cursor-pointer hover:shadow-md transition"
                onClick={() => navigate(`/entry/${entry._id}`)}
              >

                <CardContent className="p-5 space-y-2">

                  <div className="flex justify-between">

                    <h2 className="text-lg font-semibold">
                      {entry.title}
                    </h2>

                    <span>
                      {entry.mood}
                    </span>

                  </div>

                  <p className="text-sm text-muted">
                    {new Date(entry.createdAt).toDateString()}
                  </p>

                  <p className="text-sm text-muted">
                    {entry.content?.slice(0,100)}...
                  </p>

                </CardContent>

              </Card>

            </motion.div>

          ))}

        </div>

      </div>

    </div>

  )

}