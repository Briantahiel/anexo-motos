import { FormData } from "@/lib/types"

export default function AnexoM1({ data }: { data: FormData }) {
  return (
    <div className="doc">

      {/* TÍTULO */}
      <div className="text-center mb-6">
        <h1 className="title">ANEXO M1</h1>
        <p className="subtitle">
          CONSENTIMIENTO ENTREGA DE <br />
          MOTOVEHICULOS Y DOCUMENTAL <br />
          PRESTA CONFORMIDAD
        </p>
      </div>

      {/* FECHA */}
      <div className="text-right mb-6 text-sm">
        {data.lugar}, a {data.fecha}
      </div>

      {/* CUERPO */}
      <p className="parrafo">
        Por la presente el que subscribe deja expresamente CONSENTIDO por este acto que el Sr/a{" "}
        <strong>{data.cliente.nombre}</strong>, D.N.I{" "}
        <strong>{data.cliente.dni}</strong>, domiciliado realmente en{" "}
        <strong>{data.cliente.domicilio}</strong>, quien habiendo adquirido la motocicleta
        marca <strong>{data.moto.marca}</strong>, Motor Nro:{" "}
        <strong>{data.moto.motor}</strong>, Chasis Nro:{" "}
        <strong>{data.moto.chasis}</strong>, Modelo:{" "}
        <strong>{data.moto.modelo}</strong>, conforme factura Nro{" "}
        <strong>{data.operacion.factura}</strong>, presta consentimiento pleno, libre y absoluto del
        estado exterior de la motocicleta en cuestión así como de haber constatado fielmente los
        originales de la documentación que con la firma del presente se avalan respecto del año de
        fabricación, modelo y que la misma es 0 km.
      </p>

      <p className="parrafo">
        Asimismo y de conformidad al consentimiento aquí expresado, renuncio por este acto a realizar
        cualquier tipo de reclamo por ante autoridades administrativas, policiales y judiciales sean
        las mismas municipales, provinciales y/o nacionales respecto de las condiciones de la
        motocicleta identificada ut-supra.
      </p>

      <p className="parrafo">
        La presente reviste calidad de declaración jurada. Con lo que por medio del presente se
        deslinda todo tipo de responsabilidad que el comprador y/o titular registral de la
        motocicleta en cuestión pueda reclamar y/o imputar incumplimiento alguno a la empresa.
      </p>

      {/* FIRMAS */}
      <div className="firma-container">
        <div className="firma">
          <p>Firma: ___________________________</p>
          <p>Aclaración: _______________________</p>
          <p>DNI: _____________________________</p>
        </div>
      </div>

    </div>
  )
}