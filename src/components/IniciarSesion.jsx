import { useState, useRef } from "react"
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles, ShieldCheck, Loader2 } from "lucide-react"
import { UsuarioAutentificacion } from "../context/ContextUsuarios"

export function IniciarSesion({ onFinalizar, onRegistrar }) {
  const [correo, setCorreo] = useState("")
  const [contrasena, setContrasena] = useState("")
  const [errorLogin, setErrorLogin] = useState("")
  const enviandoRef = useRef(false)

  const { iniciarSesion, cargando, setCargando } = UsuarioAutentificacion()

  const ocupado = cargando

  const enviarUsuario = async (e) => {
    e.preventDefault()
    if (enviandoRef.current) return // bloquea doble clic inmediato

    enviandoRef.current = true
    setCargando(true) // desactiva el botón en el siguiente render

    try {
      const exito = await iniciarSesion(correo, contrasena)
      if (exito) onFinalizar()
      else setErrorLogin("Correo o contraseña incorrectos")
    }finally {
      enviandoRef.current = false
      setCargando(false)
    }
  }

  const [verContrasena, setVerContrasena] = useState(false)

  const inputClase =
    "w-full py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 " +
    "placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 " +
    "focus:border-indigo-500 transition-all duration-200 disabled:opacity-60"

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden bg-slate-950 bg-[url('/fondo_pg_registrar.jpg')] bg-cover bg-center bg-no-repeat selection:bg-indigo-500 selection:text-white">

      <div className="absolute inset-0 bg-slate-950/80 pointer-events-none" />
      
      <div
        className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/25 rounded-full blur-[120px] pointer-events-none animate-pulse"
        style={{ animationDelay: "2s" }}
      />
     

      <main className="relative z-10 w-full max-w-5xl grid lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/75 backdrop-blur-2xl">

        <div className="lg:flex lg:col-span-5 flex-col justify-between relative overflow-hidden p-12 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950">

          <img
                src="fondo_iniciar.png"
                alt="Imagen decorativa"
            />

          <div className="relative z-10 my-auto py-1">

            <h1 className="text-3xl xl:text-4xl font-extrabold text-white leading-tight mb-4">
              Gestiona tus tareas pendientes con{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300">
                elegancia
              </span>
              .
            </h1>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white/80 backdrop-blur-xl p-8 sm:p-12 flex flex-col justify-between">

          <div className="max-w-md w-full mx-auto my-auto space-y-6">
            <div className="text-left space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                ¡Bienvenido! 📋
              </h2>
              <p className="text-sm text-slate-500">Ingresa tus datos para acceder a tu cuenta.</p>
            </div>

            <form onSubmit={enviarUsuario} className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="correo" className="block text-xs font-semibold text-slate-700">
                  Correo electrónico
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="correo"
                    type="email"
                    required
                    placeholder="nombre@correo.com"
                    className={`${inputClase} pl-10 pr-4`}
                    value={correo}
                    onChange={(e) => {
                      setCorreo(e.target.value)
                    }}
                    disabled={ocupado}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contrasena" className="block text-xs font-semibold text-slate-700">
                  Contraseña
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    id="contrasena"
                    type={verContrasena ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    className={`${inputClase} pl-10 pr-10`}
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    disabled={ocupado}
                  />

                  {errorLogin && (
                    <p className="text-red-500 text-sm mt-1" role="alert">
                      {errorLogin}
                    </p>
                  )}

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
                <span>{ocupado ? "Iniciando..." : "Iniciar sesión"}</span>
                {ocupado ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          </div>

          
          <div className="text-center text-xs text-slate-500 mt-8">
            ¿No tienes una cuenta?{" "}
            <button type="button" onClick={onRegistrar} className="text-indigo-600 font-semibold hover:underline">
              Regístrate
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
