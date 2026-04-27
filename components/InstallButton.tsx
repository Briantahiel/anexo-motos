"use client"

import { useEffect, useState } from "react"

export default function InstallButton() {
  const [prompt, setPrompt] = useState<any>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault()
      setPrompt(e)
      setVisible(true)
    }

    window.addEventListener("beforeinstallprompt", handler)

    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstall = async () => {
    if (!prompt) return

    prompt.prompt()
    const choice = await prompt.userChoice

    if (choice.outcome === "accepted") {
      setVisible(false)
    }
  }

  if (!visible) return null

  return (
    <button
      onClick={handleInstall}
      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
    >
      📲 Descargar app
    </button>
  )
}