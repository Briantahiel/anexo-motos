import { FormData } from "@/lib/types"

export default function AnexoM2({ data }: { data: FormData }) {
  return (
    <div className="doc">

      {/* TÍTULO */}
      <div className="text-center mb-6">
        <h1 className="title">ANEXO M2</h1>
        <p className="subtitle">CONTROL ENTREGA UNIDAD</p>
      </div>

      {/* BLOQUE DATOS */}
      <div className="datos-grid mb-6">
        <p><strong>FECHA:</strong> {data.fecha}</p>
        <p><strong>CLIENTE:</strong> {data.cliente.nombre}</p>
        <p><strong>MARCA:</strong> {data.moto.marca}</p>
        <p><strong>MODELO:</strong> {data.moto.modelo}</p>
        <p><strong>MOTOR:</strong> {data.moto.motor}</p>
        <p><strong>CHASIS:</strong> {data.moto.chasis}</p>
        <p><strong>NRO. FACTURA:</strong> {data.operacion.factura}</p>
      </div>

      {/* CONDICIONES */}
      <div className="mb-6">
        <p className="subtitle mb-2">CONDICIONES DE ASENTAMIENTO</p>

        <ul className="condiciones">
          <li>
            Durante los primeros 1000 km se debe evitar circular a máxima velocidad y cargar el motor
            fuertemente. Asegúrese de cambiar las velocidades constantemente.
          </li>
          <li>
            Durante los primeros 500 km, asegúrese que la velocidad máxima no supere los 40 km/h.
          </li>
          <li>
            Entre 500 y 1000 km, asegúrese que la velocidad no supere los 60 km/h.
          </li>
        </ul>

        <p className="nota">
          Nota: Después del período de asentamiento, asegúrese de mantener la motocicleta de acuerdo
          al plan de mantenimiento, para que esta se encuentre en óptimo estado y rendimiento, lo cual
          alargará la vida útil del motor.
        </p>
      </div>

      {/* TABLA (NO DINÁMICA) */}
      <table className="tabla-m2">
        <thead>
          <tr>
            <th></th>
            <th>OK</th>
            <th>OBSERVACIONES</th>
          </tr>
        </thead>
        <tbody>
          {[
            "BATERIA",
            "NIVEL DE ACEITE",
            "AJUSTES GENERALES",
            "HERRAMIENTAS",
            "FRENOS",
            "LUCES",
            "BOCINA",
          ].map((item) => (
            <tr key={item}>
              <td>{item}</td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* FIRMAS */}
      <div className="firmas-m2">
        <div>
          <p>FIRMA DEL CLIENTE: ___________________________</p>
          <p>ACLARACION: _________________________________</p>
          <p>DNI: _______________________________________</p>
        </div>

        <div>
          <p>FIRMA RPV: _________________________________</p>
          <p>ACLARACION: _________________________________</p>
          <p>DNI: _______________________________________</p>
        </div>
      </div>

    </div>
  )
}