import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

const Parent = () => {
  return (
    <section className="w-screen h-screen overflow-hidden relative">
      <NavBar />
      <div className="flex flex-row h-[calc(100vh-50px)] border-r-width-0.4 border-b-Neutrals-200 bg-Base-White">
        <Outlet />
      </div>
    </section>
  )
}

export default Parent