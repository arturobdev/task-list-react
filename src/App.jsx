
import './App.css'
import { TaskForm } from './components/form/TaskForm'
import { TaskTable } from './components/table/TaskTable'

function App() {

  return (
    <>
      <h1>Lista de tareas </h1>
      <TaskForm/>
      <TaskTable/>
    </>
  )
}

export default App
