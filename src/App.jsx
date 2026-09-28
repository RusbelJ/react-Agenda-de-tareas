import { useState } from 'react'
import { Registrar } from './components/Registrar.jsx'
import { CrearTarea } from './components/CrearTarea.jsx'

export default function App() {
  const [pantalla, setPantalla] = useState("registrar")

  return (
    <div>
      {pantalla === "registrar" && <Registrar onFinalizar={() => setPantalla("tareas")} />}
      {pantalla === "tareas" && <CrearTarea />}
    </div>
  )
}