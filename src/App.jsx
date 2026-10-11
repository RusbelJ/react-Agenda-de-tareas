import { useState, useEffect } from 'react'
import { Registrar } from './components/Registrar.jsx'
import { CrearTarea } from './components/CrearTarea.jsx'
import { IniciarSesion} from './components/IniciarSesion.jsx'

export default function App() {
  const [pantalla, setPantalla] = useState(() => {
    try {
      return localStorage.getItem("pantalla") || "iniciar"
    } catch {
      return "iniciar"
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem("pantalla", pantalla)
    } catch {}
  }, [pantalla])

  const onFinalizar = () => setPantalla("tareas")
  const onRegistrar = () => setPantalla("registrar")
  const onIniciar = () => setPantalla("iniciar")

  return (
    <div>
      {pantalla === "iniciar" && <IniciarSesion onFinalizar={onFinalizar} onRegistrar={onRegistrar}/>}
      {pantalla === "tareas" && <CrearTarea onIniciar={onIniciar}/>}
      {pantalla === "registrar" && <Registrar onFinalizar={onFinalizar} onIniciar={onIniciar} />}
    </div>
  )
}