import { useState } from "react"
import { useReactMediaRecorder } from "react-media-recorder"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

import { Mic, StopCircle, Trash2 } from "lucide-react"
import { motion } from "framer-motion"

export default function AudioRecorder() {

  const [audios, setAudios] = useState([])

  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    clearBlobUrl
  } = useReactMediaRecorder({ audio: true })

  const saveRecording = () => {

    if (mediaBlobUrl) {
      setAudios([...audios, mediaBlobUrl])
      clearBlobUrl()
    }

  }

  const deleteAudio = (index) => {

    const updated = audios.filter((_, i) => i !== index)
    setAudios(updated)

  }

  return (

    <div className="space-y-6">

      {/* RECORD BUTTON */}

      <div className="flex items-center gap-4">

        {status !== "recording" ? (

          <button
            onClick={startRecording}
            className="flex items-center gap-2 bg-primary text-black px-4 py-2 rounded-lg hover:opacity-90 transition"
          >
            <Mic size={18}/>
            Record Audio
          </button>

        ) : (

          <button
            onClick={stopRecording}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            <StopCircle size={18}/>
            Stop Recording
          </button>

        )}

        {/* RECORDING INDICATOR */}

        {status === "recording" && (

          <motion.div
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="w-3 h-3 bg-red-500 rounded-full"
          />

        )}

      </div>


      {/* PREVIEW BEFORE SAVING */}

      {mediaBlobUrl && (

        <div className="space-y-3 border border-border rounded-lg p-4">

          <p className="text-sm text-muted">
            Preview recording
          </p>

          <AudioPlayer
            src={mediaBlobUrl}
            showJumpControls={false}
          />

          <div className="flex gap-3">

            <button
              onClick={saveRecording}
              className="px-4 py-2 bg-primary text-black rounded-lg"
            >
              Save Audio
            </button>

            <button
              onClick={clearBlobUrl}
              className="px-4 py-2 border border-border rounded-lg"
            >
              Re-record
            </button>

          </div>

        </div>

      )}


      {/* SAVED AUDIO CLIPS */}

      {audios.length > 0 && (

        <div className="space-y-4">

          <p className="text-sm text-muted">
            Audio Notes
          </p>

          {audios.map((audio, index) => (

            <div
              key={index}
              className="flex items-center gap-3 border border-border rounded-lg p-3"
            >

              <div className="flex-1">

                <AudioPlayer
                  src={audio}
                  showJumpControls={false}
                />

              </div>

              <button
                onClick={() => deleteAudio(index)}
                className="text-red-500"
              >
                <Trash2 size={18}/>
              </button>

            </div>

          ))}

        </div>

      )}

    </div>

  )

}