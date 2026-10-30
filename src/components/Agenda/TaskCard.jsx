import { Trash2 } from "lucide-react"
import { useContext } from "react"
import { TaskContext } from "../../context/TaskContext"
export default function TaskCard({ task }) {

  const {deliteTask} = useContext(TaskContext)

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 text-white shadow-xl hover:border-indigo-500/40 hover:bg-white/[0.07] transition-colors duration-200">
        <div>
            <h1 className="text-lg font-bold capitalize break-words">{task.title}</h1>
            <p className="mt-2 text-slate-400 text-sm leading-relaxed break-words">{task.descripcion}</p>
        </div>
        <button
          className="mt-5 self-start flex items-center space-x-2 px-3 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 text-xs font-semibold active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-red-500/40 transition-all duration-200"
          onClick={() => deliteTask(task.id)}
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Eliminar tarea</span>
        </button>
    </div>
  )
}
