import TaskList from './Agenda/TaskList'
import TaskForm from './Agenda/TaskForm'

export function CrearTarea({onIniciar}) {
  return (
    <div className='w-full min-h-screen bg-zinc-900'>
      <div className=' container m-auto p-10'>
        <TaskList></TaskList>
        <TaskForm></TaskForm>
        <button className=' w-full mb-2 bg-indigo-500 px-4 py-2 text-white rounded-md hover:bg-indigo-300 disabled:opacity-50"'
        onClick={onIniciar}>
          Cerrar sesion
        </button>
      </div>
    </div>
  )
}
