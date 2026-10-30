import { useState, useContext } from "react"
import { Plus, NotebookPen } from "lucide-react"
import { TaskContext } from "../../context/TaskContext"

export default function TaskForm() {

  const [title, setTitle] = useState("")
  const [descripcion, setDescription] = useState("")
  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask({
      title,
      descripcion
    })
    setTitle('')
    setDescription('')
  }

  const campoClase =
    "w-full px-4 py-3 bg-slate-900/60 border border-white/10 rounded-xl text-sm text-white " +
    "placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 " +
    "focus:border-indigo-500 transition-all duration-200"

  return (
    <div className="w-full">
      <form
        key={"Formulario"}
        onSubmit={handleSubmit}
        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6 sm:p-8 space-y-4"
      >
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <NotebookPen className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Crea tu tarea</h1>
        </div>

        <input placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={campoClase}
        autoFocus
        />
        <textarea placeholder="Escribe la descripcion de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={descripcion}
        rows={4}
        className={`${campoClase} resize-none`}
        ></textarea>
        <button
        type="submit"
        className="w-full py-3.5 px-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-600/25 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-200">
            <Plus className="w-4 h-4" />
            <span>Agregar</span>
        </button>
      </form>
    </div>
  )
}
