import { Sparkles, Users } from "lucide-react"
import { Formulario } from "./Registrar/Formulario"

export function Registrar({ onFinalizar, onIniciar }) {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden bg-slate-950 bg-[url('/fondo_pg_registrar.jpg')] bg-cover bg-center bg-no-repeat selection:bg-indigo-500 selection:text-white">

      <div className="absolute inset-0 bg-slate-950/80 pointer-events-none" />

      <div
        className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/25 rounded-full blur-[120px] pointer-events-none animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="fixed top-[40%] right-[30%] w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse"
        style={{ animationDelay: "4s" }}
      />


      <main className="relative z-10 w-full max-w-5xl grid lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/75 backdrop-blur-2xl">
        <div className="hidden lg:flex lg:col-span-5 flex-col justify-between relative overflow-hidden p-12 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950">

            <img
                src="fondo_registrar.png"
                alt="Imagen decorativa"
            />

            <h1 className="text-3xl xl:text-4xl font-extrabold text-white leading-tight mb-4">
              Únete y empieza a organizar tus{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300">
                tareas
              </span>
              .
            </h1>

        </div>

        <div className="lg:col-span-7 bg-white/80 backdrop-blur-xl p-8 sm:p-12 flex flex-col justify-center">
          <Formulario onFinalizar={onFinalizar} onIniciar={onIniciar} />
        </div>
      </main>
    </div>
  )
}
