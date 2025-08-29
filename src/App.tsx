import { Layout } from './components/Layout'
import { TasksBox } from './components/TasksBox'
import { TaskContextProvider } from './context/TaskContext'

function App() {


  return (
    <div>
      <TaskContextProvider>
        <Layout>
          <TasksBox />
        </Layout>
      </TaskContextProvider>
    </div>
  )
}

export default App
