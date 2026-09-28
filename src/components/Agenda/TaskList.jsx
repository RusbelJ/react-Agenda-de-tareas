import TaskCard from "./TaskCard"
import { useContext } from "react"
import { TaskContext } from "../../context/TaskContext"

export default function TaskList() {

    const {task} = useContext(TaskContext)

    if (task.length === 0){
        return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
                task.map( (tasks) => (
                <TaskCard key={tasks.id} task={tasks}></TaskCard>
                ))
            }
        </div>
  )
}
