import { FormData } from "@/lib/types"

export default function DeclaracionPage1({ data }: { data: FormData }) {
  return (
    <div className="doc declaracion-doc">

      {/* TÍTULO SUPERIOR */}
      <div className="text-center declaracion-header">
        <h1 className="title">DECLARACIÓN JURADA</h1>
      </div>

      {/* LUGAR Y FECHA */}
      <div className="declaracion-fecha text-sm">
        Lugar y Fecha: {data.lugar}, {data.fecha}
      </div>

      {/* DATOS CLIENTE Y MOTO */}
      <div className="declaracion-datos-grid">
        <section>
          <p><strong>Datos del Cliente</strong></p>
          <p>Apellido y Nombres: {data.cliente.nombre}</p>
          <p>Número de DNI: {data.cliente.dni}</p>
        </section>

        <section>
          <p><strong>Datos de la Moto</strong></p>
          <p>Marca: {data.moto.marca}</p>
          <p>Modelo: {data.moto.modelo}</p>
          <p>Dominio: {data.moto.dominio}</p>
          <p>Motor: {data.moto.motor}</p>
          <p>Chasis: {data.moto.chasis}</p>
        </section>
      </div>

      {/* SUBTÍTULO */}
      <div className="text-center declaracion-subtitulo">
        <p className="subtitle">
          DECLARACIÓN JURADA DE CONFORMIDAD Y CONSENTIMIENTO <br />
          EN LA RECEPCIÓN DEL VEHÍCULO Y LOS DOCUMENTOS REGISTRALES
        </p>
      </div>

      {/* TEXTO */}
      <p className="parrafo">
        El que suscribe, Sr./Sra. <strong>{data.cliente.nombre}</strong>, con DNI N°{" "}
        <strong>{data.cliente.dni}</strong>, presta plena conformidad, libre y absoluta del estado
        exterior de la motocicleta en cuestión así como de haber constatado fielmente los originales
        de la documentación que con la firma del presente se avalan respecto del año de fabricación,
        modelo y que la misma es 0 km.
      </p>

      <p className="parrafo">
        Asimismo, presta consentimiento pleno, libre y absoluto respecto del proceso de inscripción y
        retiro de la chapa patente conforme, habiendo verificado su correcto estado y correspondencia
        con los datos de su vehículo.
      </p>

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
      <div className="firma-final declaracion-firma-final">
        <p>Firma del Cliente: ___________________________</p>
        <p>Aclaración: _________________________________</p>
        <p>Firma y Sello de la Concesionaria: ____________</p>
      </div>

    </div>
  )
}
