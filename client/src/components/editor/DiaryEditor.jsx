import { useRef, useState } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Image from "@tiptap/extension-image"

import { ImagePlus, Bold, Italic, Sparkles } from "lucide-react"

import { enhanceEntry } from "@/api/aiApi"

export default function DiaryEditor({ onContentChange }) {

  const fileInputRef = useRef(null)

  const [loadingAI, setLoadingAI] = useState(false)

  const editor = useEditor({

    extensions: [
      StarterKit,
      Image
    ],

    content: "<p>Start writing your thoughts...</p>",

    onUpdate({ editor }) {
      const text = editor.getText()
      onContentChange?.(text)
    }

  })


  const handleImageUpload = (event) => {

    const file = event.target.files?.[0]

    if (!file) return

    const imageUrl = URL.createObjectURL(file)

    editor
      .chain()
      .focus()
      .setImage({ src: imageUrl })
      .run()

  }


  const openFilePicker = () => {
    fileInputRef.current.click()
  }


  const handleEnhance = async () => {

    const text = editor.getText()

    if (!text) return

    try {

      setLoadingAI(true)

      const enhanced = await enhanceEntry(text)

      editor.commands.setContent(`<p>${enhanced}</p>`)

    } catch (err) {

      console.error(err)

    } finally {

      setLoadingAI(false)

    }

  }


  if (!editor) return null


  return (

    <div className="space-y-3">

      {/* TOOLBAR */}

      <div className="flex gap-3 border border-border rounded-lg p-2">

        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="p-2 hover:bg-surface rounded transition"
        >
          <Bold size={16}/>
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="p-2 hover:bg-surface rounded transition"
        >
          <Italic size={16}/>
        </button>

        {/* IMAGE */}

        <button
          onClick={openFilePicker}
          className="p-2 hover:bg-surface rounded transition"
        >
          <ImagePlus size={16}/>
        </button>

        {/* AI ENHANCE */}

        <button
          onClick={handleEnhance}
          className="p-2 hover:bg-surface rounded transition flex items-center gap-1"
        >
          <Sparkles size={16}/>
          {loadingAI ? "..." : "Enhance"}
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />

      </div>


      {/* EDITOR */}

      <div className="border border-border rounded-lg p-4 min-h-[200px]">

        <EditorContent editor={editor} />

      </div>

    </div>

  )

}