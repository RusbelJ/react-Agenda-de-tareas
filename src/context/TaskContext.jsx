import { createContext, useState, useEffect } from "react"
import {task as data} from '../data/task'

export const TaskContext = createContext()

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

  useEffect(()=>{
    setTask(data)
  }, [])

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