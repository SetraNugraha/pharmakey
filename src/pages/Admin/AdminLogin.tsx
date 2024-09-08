import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const navigate = useNavigate()
  return (
    <>
      <section className="h-screen flex justify-center items-center">
        <div className="p-5 border border-slate-100 shadow-xl rounded-lg w-[400px]">
          <h1 className="font-bold text-xl text-slate-500 mb-5">Pharmakey Admin Login</h1>
          <form action="" className="flex flex-col gap-2">
            {/* Username */}
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="font-semibold text-slate-400">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="h-[35px] border border-slate-300 rounded-lg px-5 focus:outline-none focus:border-[2px] focus:border-blue-500"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="font-semibold text-slate-400">
                Password
              </label>
              <input
                type="text"
                name="password"
                id="password"
                className="h-[35px] border border-slate-300 rounded-lg px-5 focus:outline-none focus:border-[2px] focus:border-blue-500"
              />
            </div>

            {/* Button Login */}
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-xl mt-5 text-lg hover:bg-slate-400 duration-200">
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
