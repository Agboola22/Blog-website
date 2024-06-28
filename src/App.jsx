import { Outlet } from "react-router-dom"
import Navbutton from "./components/Navbutton"
import './App.css'

const App = () => {


  return (
    <>
      <Navbutton />
      <Outlet />
    </>
  )
}

export default App
