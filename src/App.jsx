import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

import { useState,useEffect } from 'react'

export default function App() {
  return (
    <div className='bg-zinc-900 h-screen'>
      <div className='container m-auto p-10'>
        <TaskList></TaskList>
      <TaskForm></TaskForm>
      </div>
    </div>
  )
}
