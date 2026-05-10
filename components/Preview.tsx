"use client"

import { FormData } from "@/lib/types"
import AnexoM1 from "./documentos/AnexoM1"
import AnexoM2 from "./documentos/AnexoM2"
import DeclaracionPage1 from "./documentos/DeclaracionPage1"


type Html2PdfOptions = {
  margin: number
  filename: string
  image: { type: string; quality: number }
  html2canvas: { scale: number }
  jsPDF: {
    unit: string
    format: string
    orientation: string
  }
  pagebreak: {
    mode: string[]
    before: string
  }
}

type Html2Pdf = () => {
  set: (options: Html2PdfOptions) => {
    from: (element: HTMLElement) => {
      save: () => void
    }
  }
}

type PreviewProps = {
  data: FormData
  onBack: () => void
}

export default function Preview({ data, onBack }: PreviewProps) {

const descargarPDF = async () => {
  const elemento = document.getElementById("documentos")
  if (!elemento) return

  const html2pdf = (await import("html2pdf.js")).default as Html2Pdf

  html2pdf()
    .set({
      margin: 0,
      filename: "anexos.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
      pagebreak: {
        mode: ["css"],
        before: ".page:not(:first-child)",
      },
    })
    .from(elemento)
    .save()
}

  return (
    <div>

      <div className="mb-4 flex gap-2">
        <button onClick={onBack}>← Volver</button>
        <button onClick={() => window.print()}>🖨️ Imprimir</button>
        <button onClick={descargarPDF}>📄 Descargar PDF</button>
      </div>

      <div id="documentos">
        <div className="page"><AnexoM1 data={data} /></div>
        <div className="page"><AnexoM2 data={data} /></div>
        <div className="page page-declaracion"><DeclaracionPage1 data={data} /></div>
      </div>

    </div>
  )
}