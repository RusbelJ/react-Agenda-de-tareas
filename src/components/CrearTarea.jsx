import TaskList from './Agenda/TaskList'
import TaskForm from './Agenda/TaskForm'

export function CrearTarea() {
  return (
    <div className='w-full min-h-screen bg-zinc-900'>
      <div className=' container m-auto p-10'>
        <TaskList></TaskList>
        <TaskForm></TaskForm>
      </div>
    </div>
  )
}
