import { createContext, useState, useEffect } from "react"

export const TaskContext = createContext()

const API_URL = "http://localhost:3001/api/tasks"

export function TaskContextProvider(props) {
  const [task, setTask] = useState([])

  function createTask(tarea) {
    setTask([...task, {
      title: tarea.title,
      id: task.length,
      descripcion: tarea.descripcion
    }])
  }

  function deliteTask(taskId) {
    setTask(task.filter(task => task.id !== taskId))
  }

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTask(data))
      .catch(err => console.error("Error cargando tareas:", err))
  }, [])

  async function saveTasks() {
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task)
      })
      alert("Tareas guardadas correctamente")
    } catch (err) {
      console.error("Error guardando tareas:", err)
      alert("Ocurrió un error al guardar")
    }
  }

  return (
    <TaskContext.Provider value={{
      task,
      deliteTask,
      createTask,
      saveTasks
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}