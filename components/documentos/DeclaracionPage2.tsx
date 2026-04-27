import { FormData } from "@/lib/types"

export default function DeclaracionPage2({ data }: { data: FormData }) {
  return (
    <div className="doc">

      {/* CONTINUACIÓN TEXTO */}
      <p className="parrafo">
        Asimismo, por medio de la suscripción del presente documento se deja constancia que al
        consumidor/usuario/titular registral le fue explicado de manera clara, precisa y concisa lo
        siguiente:
      </p>

      <ul className="condiciones">
        <li>
          Que los elementos registrales como Título de Propiedad y Cédula son de formato digital y
          serán enviados por mail al correo del cliente y a la app Mi Argentina, respectivamente.
        </li>
        <li>
          Que el Registro Seccional indicado en el Título de Propiedad es la autoridad competente
          donde deben acudir para realizar trámites posteriores.
        </li>
        <li>
          Que el pago de los impuestos tributarios tanto provinciales como municipales son
          responsabilidad del titular del vehículo.
        </li>
      </ul>

      <p className="parrafo">
        La presente reviste calidad de declaración jurada. Con lo que por medio del presente se
        deslinda todo tipo de responsabilidad que el comprador y/o titular registral de la
        motocicleta en cuestión pueda reclamar y/o imputar incumplimiento alguno a la empresa.
      </p>

      {/* FIRMAS */}
      <div className="firma-final">
        <p>Firma del Cliente: ___________________________</p>
        <p>Aclaración: _________________________________</p>
        <p>Firma y Sello de la Concesionaria: ____________</p>
      </div>

    </div>
  )
}