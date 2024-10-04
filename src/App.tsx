import { BrowserRouter as Router } from "react-router-dom"
import { Sidebar } from "./components/Sidebar"


export function App() {


  return (
    <>
      <Router>
        <div className="flex h-screen">
          <Sidebar />
        </div>
      </Router>
    </>
  )
}

export default App
