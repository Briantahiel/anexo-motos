export type FormData = {
  fecha: string
  lugar: string

  cliente: {
    nombre: string
    dni: string
    domicilio: string
  }

  moto: {
    marca: string
    modelo: string
    motor: string
    chasis: string
    dominio: string
  }

  operacion: {
    factura: string
  }
} 