import { useState, useRef } from "react"
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react"
import { UsuarioAutentificacion } from "../../context/ContextUsuarios"

export function Formulario({ onFinalizar, onIniciar }) {
  const [nombreUsuario, setNombreUsuario] = useState("")
  const [correo, setCorreo] = useState("")
  const [contrasena, setContrasena] = useState("")
  const enviandoRef = useRef(false)
  //Es importante que al ejecutar esta funcion sea despues de los use State porque esta utiliza el use context
  const { registrar, cargando, setCargando } = UsuarioAutentificacion()

  const ocupado = cargando

  const enviarUsuario = async (e) => {
    e.preventDefault()
    if (enviandoRef.current) return // bloquea doble clic inmediato

    enviandoRef.current = true
    setCargando(true) // desactiva el botón en el siguiente render

    try {
      const exito = await registrar(nombreUsuario, correo, contrasena)
      if (exito) onFinalizar()
    } finally {
      enviandoRef.current = false
      setCargando(false)
    }
  }
  const [verContrasena, setVerContrasena] = useState(false)

  const inputClase =
    "w-full py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 " +
    "placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 " +
    "focus:border-indigo-500 transition-all duration-200 disabled:opacity-60"

  const iconoClase =
    "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors"

  return (
    <div className="max-w-md w-full mx-auto space-y-6">
      <div className="text-left space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Crea tu cuenta ✨</h2>
        <p className="text-sm text-slate-500">Completa tus datos para registrar un nuevo usuario.</p>
      </div>

      <form onSubmit={enviarUsuario} className="space-y-4">
        <div className="space-y-1.5">
          <label htmlFor="nombreUsuario" className="block text-xs font-semibold text-slate-700">
            Nombre de usuario
          </label>
          <div className="relative group">
            <div className={iconoClase}>
              <User className="w-4 h-4" />
            </div>
            <input
              id="nombreUsuario"
              required
              placeholder="Ingresa un usuario"
              className={`${inputClase} pl-10 pr-4`}
              value={nombreUsuario}
              disabled={ocupado}
              onChange={(e) => setNombreUsuario(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="correo" className="block text-xs font-semibold text-slate-700">
            Correo electrónico
          </label>
          <div className="relative group">
            <div className={iconoClase}>
              <Mail className="w-4 h-4" />
            </div>
            <input
              id="correo"
              type="email"
              required
              placeholder="nombre@empresa.com"
              className={`${inputClase} pl-10 pr-4`}
              value={correo}
              disabled={ocupado}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="contrasena" className="block text-xs font-semibold text-slate-700">
            Contraseña
          </label>
          <div className="relative group">
            <div className={iconoClase}>
              <Lock className="w-4 h-4" />
            </div>
            <input
              id="contrasena"
              type={verContrasena ? "text" : "password"}
              required
              placeholder="••••••••"
              className={`${inputClase} pl-10 pr-10`}
              value={contrasena}
              disabled={ocupado}
              onChange={(e) => setContrasena(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setVerContrasena((v) => !v)}
              aria-label="Mostrar u ocultar contraseña"
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
            >
              {verContrasena ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={ocupado}
          className="w-full mt-2 py-3.5 px-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-600/25 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{ocupado ? "Agregando..." : "Agregar"}</span>
          {ocupado ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
        </button>
      </form>

      <div className="text-center text-xs text-slate-500 pt-2">
        ¿Ya tienes una cuenta?{" "}
        <button type="button" onClick={onIniciar} className="text-indigo-600 font-semibold hover:underline">
          Iniciar sesión
        </button>
      </div>
    </div>
  )
}
