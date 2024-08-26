import { Logo } from '../components/Logo'
import { InputField } from '../components/InputField'

export default function Login() {
  return (
    <>
      {/* Logo & Name */}
      <div className="pt-[170px] grid place-items-center">
        <Logo />
      </div>

      {/* Card Login */}
      <div className="pt-[160px]">
        <form className="bg-white mx-[24px] rounded-[30px] border border-slate-200">
          <div className="p-[24px]">
            <h1 className="text-2xl font-bold mb-[20px]">Sign In</h1>

            <div className="flex flex-col gap-y-[20px]">
              {/* Email */}
              <InputField
                label="Email Address"
                type="email"
                name="email"
                placeholder="Your email address"
                icon="assets/img/email.png"
              />

              {/* Password */}
              <InputField
                label="Password"
                type="password"
                name="password"
                placeholder="Protect your password"
                icon="assets/img/lock.png"
              />
            </div>

            <button className="bg-[#FD915A] text-white font-bold text-xl text-center h-[48px] w-full rounded-3xl mt-[20px] hover:opacity-70">Sign In</button>
          </div>
        </form>
      </div>

      <div className="w-full text-center mt-[30px]">
        <a
          href="#"
          className="font-bold underline"
        >
          Create New Account
        </a>
      </div>
    </>
  )
}
