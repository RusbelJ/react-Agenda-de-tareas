import { Sparkles, LogOut } from "lucide-react"
import TaskList from './Agenda/TaskList'
import TaskForm from './Agenda/TaskForm'

export function CrearTarea({ onIniciar }) {
  return (
    <div className="relative w-full min-h-screen bg-slate-950 overflow-hidden selection:bg-indigo-500 selection:text-white">

      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div
        className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/25 rounded-full blur-[120px] pointer-events-none animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="fixed top-[40%] right-[30%] w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 py-8">

        <header className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Tus tareas pendientes con nosotros</span>
          </div>

          <button
            onClick={onIniciar}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-sm font-semibold backdrop-blur-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-200"
          >
            <LogOut className="w-4 h-4" />
            <span>Cerrar sesión</span>
          </button>
        </header>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-8">
            <TaskForm></TaskForm>
          </div>
          <div className="lg:col-span-8">
            <TaskList></TaskList>
          </div>
        </div>
      </div>
    </div>
  )
}
