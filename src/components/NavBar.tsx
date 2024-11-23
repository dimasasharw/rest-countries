import { useNavigate } from "react-router-dom"

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-[50px] flex justify-between items-center shrink-0 self-stretch py-0 px-7 border-b-2 border-b-slate-400 bg-slate-700">
        <div className="flex p-2 justify-center items-center gap-2 rounded-lg text-Secondary-200 hover:text-Secondary-500 cursor-pointer" onClick={() => navigate('/')}>
          <p className="text-size-4 font-500 hover:font-Neutrals-700">Rest Countries</p>
        </div>
        <div className="flex p-2 justify-center items-center gap-2 rounded-lg text-Secondary-200 hover:text-Secondary-500 cursor-pointer" onClick={() => navigate('/country-collaborations')}>
          <p className="text-size-4 font-500 hover:font-Neutrals-700">Collaborations</p>
        </div>
      </div>
    </>
  )
}

export default NavBar