import { useState, useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function CreateEntry() {
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [audioBlob, setAudioBlob] = useState(null)
  const [recording, setRecording] = useState(false)
  const [loading, setLoading] = useState(false)

  const mediaRecorderRef = useRef(null)
  const audioChunksRef = useRef([])

  // ---------------- Image Upload ----------------
  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setImage(file)
    setImagePreview(URL.createObjectURL(file))
  }

  // ---------------- Audio Recording ----------------
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)

      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: "audio/webm" })
        setAudioBlob(blob)
      }

      mediaRecorder.start()
      setRecording(true)
    } catch (err) {
      console.error("Microphone access denied:", err)
    }
  }

  const stopRecording = () => {
    mediaRecorderRef.current?.stop()
    setRecording(false)
  }

  // ---------------- Submit ----------------
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData()
      formData.append("title", title)
      formData.append("content", content)

      if (image) {
        formData.append("image", image)
      }

      if (audioBlob) {
        formData.append("audio", audioBlob, "recording.webm")
      }

      await axios.post(
        "http://localhost:5000/api/diary",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )

      navigate("/dashboard")
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center px-4 py-10">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">
            Create New Entry
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Title */}
            <div className="space-y-2">
              <Label>Title (optional)</Label>
              <Input
                placeholder="Give your thoughts a title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Content */}
            <div className="space-y-2">
              <Label>Your Thoughts</Label>
              <Textarea
                placeholder="Write what’s on your mind..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="min-h-[140px]"
              />
            </div>

            <Separator />

            {/* Image Upload */}
            <div className="space-y-3">
              <Label>Upload Image (optional)</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />

              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="preview"
                  className="rounded-lg max-h-52 object-cover"
                />
              )}
            </div>

            <Separator />

            {/* Audio Recorder */}
            <div className="space-y-3">
              <Label>Record Audio</Label>

              {!recording ? (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={startRecording}
                >
                  Start Recording
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="destructive"
                  onClick={stopRecording}
                >
                  Stop Recording
                </Button>
              )}

              {audioBlob && (
                <audio
                  controls
                  src={URL.createObjectURL(audioBlob)}
                  className="w-full"
                />
              )}
            </div>

            <Separator />

            {/* Submit */}
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Entry"}
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  )
}
