"use client"

import { useEffect, useState } from "react"

type BeforeInstallPromptChoice = {
  outcome: "accepted" | "dismissed"
  platform: string
}

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<BeforeInstallPromptChoice>
}

export default function InstallButton() {
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = (event: Event) => {
      event.preventDefault()
      setPrompt(event as BeforeInstallPromptEvent)
      setVisible(true)
    }

    window.addEventListener("beforeinstallprompt", handler)

    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstall = async () => {
    if (!prompt) return

    await prompt.prompt()
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
