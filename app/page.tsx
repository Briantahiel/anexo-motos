"use client"

import { useState } from "react"
import Formulario from "@/components/Formulario"
import Preview from "@/components/Preview"
import { FormData } from "@/lib/types"

export default function Home() {
  const [data, setData] = useState<FormData | null>(null)

  return (
    <main className="p-6">
      {!data ? (
        <Formulario onSubmit={setData} />
      ) : (
        <Preview data={data} onBack={() => setData(null)} />
      )}
    </main>
  )
}