'use client'

import { useState } from "react"
import { useNavigate } from "react-router-dom"

import api from "@/services/api"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import DiaryEditor from "@/components/editor/DiaryEditor"
import AudioRecorder from "@/components/audio/AudioRecorder"

export default function CreateEntry(){

  const navigate = useNavigate()

  const [content, setContent] = useState("")
  const [image, setImage] = useState(null)
  const [audio, setAudio] = useState(null)

  const [loading, setLoading] = useState(false)

  const handleSave = async () => {

    try {

      setLoading(true)

      const formData = new FormData()

      formData.append("content", content)

      if(image){
        formData.append("image", image)
      }

      if(audio){
        formData.append("audio", audio)
      }

      await api.post("/entries", formData, {
        headers:{
          "Content-Type":"multipart/form-data"
        }
      })

      navigate("/timeline")

    } catch(err){

      console.error(err)

    } finally {

      setLoading(false)

    }

  }

  return(

    <div className="max-w-3xl mx-auto">

      <Card>

        <CardHeader>

          <CardTitle className="font-diary text-2xl">
            New Entry
          </CardTitle>

        </CardHeader>

        <CardContent className="space-y-6">

          <DiaryEditor
            value={content}
            onChange={setContent}
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e)=>setImage(e.target.files[0])}
          />

          <AudioRecorder
            onAudioReady={setAudio}
          />

          <div className="flex gap-3">

            <Button
              onClick={handleSave}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Entry"}
            </Button>

            <Button
              variant="outline"
              onClick={()=>navigate("/timeline")}
            >
              Cancel
            </Button>

          </div>

        </CardContent>

      </Card>

    </div>

  )

}