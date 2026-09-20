import { createContext, useState, useEffect } from "react"
import { db } from "../firebase"
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc
} from "firebase/firestore"

export const TaskContext = createContext()

const tasksCollection = collection(db, "tasks")

export function TaskContextProvider(props) {
  const [task, setTask] = useState([])

  async function loadTasks() {
    try {
      const snapshot = await getDocs(tasksCollection)
      const tasksFromDb = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setTask(tasksFromDb)
    } catch (err) {
      console.error("Error cargando tareas:", err)
    }
  }

  useEffect(() => {
    loadTasks()
  }, [])

  async function createTask(tarea) {
    try {
      await addDoc(tasksCollection, {
        title: tarea.title,
        descripcion: tarea.descripcion
      })
      loadTasks()
    } catch (err) {
      console.error("Error creando tarea:", err)
    }
  }

  async function deliteTask(taskId) {
    try {
      await deleteDoc(doc(db, "tasks", taskId))
      loadTasks()
    } catch (err) {
      console.error("Error eliminando tarea:", err)
    }
  }

  return (
    <TaskContext.Provider value={{
      task,
      deliteTask,
      createTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}