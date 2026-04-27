import { FormData } from "@/lib/types"

export default function DeclaracionPage1({ data }: { data: FormData }) {
  return (
    <div className="doc">

      {/* TÍTULO SUPERIOR */}
      <div className="text-center mb-6">
        <h1 className="title">DECLARACIÓN JURADA</h1>
      </div>

      {/* LUGAR Y FECHA */}
      <div className="mb-6 text-sm">
        Lugar y Fecha: {data.lugar}, {data.fecha}
      </div>

      {/* DATOS CLIENTE */}
      <div className="mb-4">
        <p><strong>Datos del Cliente</strong></p>
        <p>Apellido y Nombres: {data.cliente.nombre}</p>
        <p>Número de DNI: {data.cliente.dni}</p>
      </div>

      {/* DATOS MOTO */}
      <div className="mb-6">
        <p><strong>Datos de la Moto</strong></p>
        <p>Marca: {data.moto.marca} &nbsp;&nbsp; Modelo: {data.moto.modelo}</p>
        <p>Número de Dominio (Patente): {data.moto.dominio}</p>
        <p>Número de Motor: {data.moto.motor}</p>
        <p>Número de Chasis: {data.moto.chasis}</p>
      </div>

      {/* SUBTÍTULO */}
      <div className="text-center mb-4">
        <p className="subtitle">
          DECLARACIÓN JURADA DE CONFORMIDAD Y CONSENTIMIENTO <br />
          EN LA RECEPCIÓN DEL VEHÍCULO Y LOS DOCUMENTOS REGISTRALES
        </p>
      </div>

      {/* TEXTO (PARTE 1) */}
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

    </div>
  )
}