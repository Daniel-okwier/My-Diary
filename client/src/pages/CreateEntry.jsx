import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import DiaryEditor from "@/components/editor/DiaryEditor"
import AudioRecorder from "@/components/audio/AudioRecorder"

import { generateTitle, detectMood } from "@/api/aiApi"

export default function CreateEntry() {

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [mood, setMood] = useState("")
  const [content, setContent] = useState("")
  const [loadingAI, setLoadingAI] = useState(false)

  const handleCancel = () => {
    navigate("/dashboard")
  }

  const handleGenerateTitle = async () => {

    if (!content) return

    try {

      setLoadingAI(true)

      const aiTitle = await generateTitle(content)

      setTitle(aiTitle)

    } finally {

      setLoadingAI(false)

    }

  }


  const handleDetectMood = async () => {

    if (!content) return

    const detectedMood = await detectMood(content)

    setMood(detectedMood)

  }


  const handleSave = () => {

    const entryData = {
      title,
      mood,
      content
    }

    console.log("Entry saved:", entryData)

    navigate("/timeline")
  }


  return (

    <div className="max-w-3xl mx-auto">

      <Card>

        <CardHeader>

          <CardTitle className="font-diary text-2xl">
            New Entry
          </CardTitle>

        </CardHeader>

        <CardContent className="space-y-6">

          {/* TITLE */}

          <div className="space-y-2">

            <p className="text-sm text-muted">
              Entry Title
            </p>

            <div className="flex gap-2">

              <Input
                placeholder="Give your entry a title..."
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              />

              <Button
                variant="outline"
                onClick={handleGenerateTitle}
              >
                AI
              </Button>

            </div>

          </div>


          {/* MOOD */}

          <div className="space-y-2">

            <p className="text-sm text-muted">
              Mood
            </p>

            <div className="flex gap-2">

              <Input
                value={mood}
                placeholder="Detected mood"
                readOnly
              />

              <Button
                variant="outline"
                onClick={handleDetectMood}
              >
                Detect
              </Button>

            </div>

          </div>


          {/* EDITOR */}

          <DiaryEditor onContentChange={setContent}/>


          {/* AUDIO */}

          <AudioRecorder/>


          {/* ACTIONS */}

          <div className="flex gap-3">

            <Button onClick={handleSave}>
              Save Entry
            </Button>

            <Button
              variant="outline"
              onClick={handleCancel}
            >
              Cancel
            </Button>

          </div>

        </CardContent>

      </Card>

    </div>

  )

}