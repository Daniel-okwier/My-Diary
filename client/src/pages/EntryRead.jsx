import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { getEntryById } from "@/services/entryService"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EntryDetail() {

  const { id } = useParams()

  const [entry, setEntry] = useState(null)

  useEffect(() => {

    const fetchEntry = async () => {

      const data = await getEntryById(id)

      setEntry(data)

    }

    fetchEntry()

  }, [id])

  if(!entry) return <p>Loading...</p>

  return (

    <div className="max-w-3xl mx-auto">

      <Card>

        <CardHeader>

          <CardTitle className="flex justify-between">

            {entry.title}

            <span>{entry.mood}</span>

          </CardTitle>

          <p className="text-sm text-muted">

            {new Date(entry.createdAt).toDateString()}

          </p>

        </CardHeader>

        <CardContent className="space-y-4">

          <p>{entry.content}</p>

        </CardContent>

      </Card>

    </div>

  )

}