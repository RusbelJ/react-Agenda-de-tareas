import { ClipboardList } from "lucide-react"
import TaskCard from "./TaskCard"
import { useContext } from "react"
import { TaskContext } from "../../context/TaskContext"

export default function TaskList() {

    const {task} = useContext(TaskContext)

    if (task.length === 0){
        return (
            <div className="rounded-3xl border border-dashed border-white/15 bg-white/5 backdrop-blur-md py-20 px-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center mb-5">
                    <ClipboardList className="w-7 h-7 text-indigo-400" />
                </div>
                <h1 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">No hay tareas aun</h1>
            </div>
        )
    }
    return (
        <div className="space-y-5">
            <div className="flex items-center space-x-3">
                <h2 className="text-xl font-bold text-white tracking-tight">Mis tareas</h2>
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
                    {task.length}
                </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {
                    task.map( (tasks) => (
                    <TaskCard key={tasks.id} task={tasks}></TaskCard>
                    ))
                }
            </div>
        </div>
  )
}
