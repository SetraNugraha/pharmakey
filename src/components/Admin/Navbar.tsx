import { useNavigate } from 'react-router-dom'

import { FaSignOutAlt } from 'react-icons/fa'

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className="w-full py-2 px-10 flex justify-between items-center border-b border-slate-300 shadow-xl">
        {/* Profile */}
        <div className="flex items-center gap-3">
          <img src="/assets/img/profile-default.png" alt="profile-image" className="h-[30px]" />
          <div className="leading-tight text-sm">
            <h1 className="text-slate-500 font-semibold">Setra Nugraha</h1>
            <p className='text-slate-400 font-semibold tracking-widest'>Admin</p>
          </div>
        </div>

        {/* Logout Button */}
        <button onClick={() => navigate('/admin/login')} className="p-2 border border-slate-400 rounded-full shadow-xl duration-200 hover:bg-red-500 group">
          <i>
            <FaSignOutAlt size={15} className="text-red-500 rotate-180 group-hover:text-white" />
          </i>
        </button>
      </section>
    </>
  )
}
