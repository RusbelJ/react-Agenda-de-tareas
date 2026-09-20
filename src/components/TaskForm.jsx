import { useState,useContext } from "react"
import { TaskContext } from "../context/TaskContext"

export default function TaskForm() {

  const [title, setTitle] = useState("")
  const [descripcion, setDescription] = useState("")
  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title,descripcion)
    createTask({
      title,
      descripcion
    })
    setTitle('')
    setDescription('')
  }


  return (
    <div className="max-w-md mx-auto">
      <form key={"Formulario"} onSubmit={handleSubmit} className="bg-slate-800 p-10 m-4">
        <h1 className="text-2xl font-bold text-white">Crea tu tarea</h1>
        <input placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-slate-300 p-3 w-full mb-2"
        autoFocus
        />
        <textarea placeholder="Escribe la descripcion de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={descripcion}
        className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py1 text-white rounded-md">
            Guardar
        </button>
      </form>
    </div>
  )
}
