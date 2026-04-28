// "use client"

// import { useForm } from "react-hook-form"
// import { FormData } from "@/lib/types"

// export default function Formulario({ onSubmit }: { onSubmit: (data: FormData) => void }) {
//   const today = new Date().toLocaleDateString("es-AR")

//   const { register, handleSubmit } = useForm<FormData>({
//     defaultValues: {
//       fecha: today,
//       lugar: "ZARATE",
//     },
//   })

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

//       <h2 className="font-bold text-lg">Cliente</h2>
//       <input {...register("cliente.nombre")} placeholder="Nombre completo" className="input" />
//       <input {...register("cliente.dni")} placeholder="DNI" className="input" />
//       <input {...register("cliente.domicilio")} placeholder="Domicilio" className="input" />

//       <h2 className="font-bold text-lg">Moto</h2>
//       <input {...register("moto.marca")} placeholder="Marca" className="input" />
//       <input {...register("moto.modelo")} placeholder="Modelo" className="input" />
//       <input {...register("moto.motor")} placeholder="Motor" className="input" />
//       <input {...register("moto.chasis")} placeholder="Chasis" className="input" />
//       <input {...register("moto.dominio")} placeholder="Dominio" className="input" />

//       <h2 className="font-bold text-lg">Operación</h2>
//       <input {...register("operacion.factura")} placeholder="Factura" className="input" />

//       <button className="bg-black text-white px-4 py-2">
//         Generar documentos
//       </button>
//     </form>
//   )
// }
"use client"

import { useForm } from "react-hook-form"
import { FormData } from "@/lib/types"
import InstallButton from "./InstallButton"

export default function Formulario({
  onSubmit,
}: {
  onSubmit: (data: FormData) => void
}) {
  const today = new Date().toLocaleDateString("es-AR")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fecha: today,
      lugar: "ZARATE",
    },
  })

  return (
    <div className="min-h-screen flex justify-center p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl bg-slate-50 p-6 rounded-2xl space-y-6 shadow-xl"
      >

        {/* HEADER */}
      <div className="text-center border-b border-gray-300 pb-4">
  <h1 className="text-2xl tracking-tight">
      Sistema de Documentación de Vehículos
  </h1>
  <p className="text-sm text-gray-500 mt-1">
      Registro de datos para la generación automática de anexos y formularios
  </p>
</div>

        {/* CLIENTE */}
        <section>
          <h2 className="text-lg mb-3">Datos del Cliente</h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <input autoFocus
                {...register("cliente.nombre", { required: true })}
                placeholder="Nombre completo"
                className="input"
              />
              {errors.cliente?.nombre && (
                <p className="error">Requerido</p>
              )}
            </div>

            <div>
              <input
                {...register("cliente.dni", {
                  required: true,
                  pattern: /^[0-9]+$/,
                })}
                placeholder="DNI"
                className="input"
              />
              {errors.cliente?.dni && (
                <p className="error">Solo números</p>
              )}
            </div>

            <div className="md:col-span-2">
              <input
                {...register("cliente.domicilio", { required: true })}
                placeholder="Domicilio"
                className="input"
              />
            </div>

          </div>
        </section>

        {/* MOTO */}
        <section>
          <h2 className="text-lg mb-3">Datos de la Moto</h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input {...register("moto.marca", { required: true })} placeholder="Marca" className="input" />
            <input {...register("moto.modelo", { required: true })} placeholder="Modelo" className="input" />

            <input {...register("moto.motor", { required: true })} placeholder="Número de motor" className="input" />
            <input {...register("moto.chasis", { required: true })} placeholder="Número de chasis" className="input" />

            <input {...register("moto.dominio")} placeholder="Dominio" className="input" />

          </div>
        </section>

        {/* OPERACIÓN */}
        <section>
          <h2 className="text-lg mb-3">Datos de la Operación</h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input {...register("operacion.factura", { required: true })} placeholder="Número de factura" className="input" />

            <input {...register("fecha")} className="input" />

            <input {...register("lugar")} placeholder="Localidad" className="input md:col-span-2" />

          </div>
        </section>

        {/* ACCIONES */}
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-700"
          >
            Generar documentos
          </button>

          <button
            type="reset"
            className="px-4 py-3 border rounded-xl"
          >
            Limpiar
          </button>
      <div className="flex justify-end">
  <InstallButton />
</div>    
        
      </form>
        <p className="text-center text-xs text-gray-400 mt-4 opacity-0 animate-fadeUp delay-500 transition-all duration-300 hover:text-gray-600">
          Developed by Brian Gómez · Cetrogar Zárate
        </p> 
    </div>
  )
}
