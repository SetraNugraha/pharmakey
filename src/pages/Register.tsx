import { Link } from 'react-router-dom'

import { Logo } from '../components/Logo'
import { InputField } from '../components/InputField'

export default function Register() {
  return (
    <>
      <section className="h-dvh">
        {/* Logo & Name */}
        <div className="pt-[70px] grid place-items-center">
          <Logo />
        </div>

        {/* Card Register */}
        <div className="pt-[50px]">
          <form className="bg-white mx-[24px] rounded-[30px] border border-slate-200">
            <div className="p-[24px]">
              <h1 className="text-2xl font-bold mb-[20px]">New Account</h1>

              {/* Data User */}
              <div className="flex flex-col gap-y-[20px]">
                {/* usernaame */}
                <InputField
                  label="Username"
                  type="text"
                  name="username"
                  placeholder="Write your full name"
                  icon="assets/img/register-profile.png"
                />

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

                {/* Confirm Password */}
                <InputField
                  label="Confirm Password"
                  type="password"
                  name="confirm_password"
                  placeholder="Protect your password"
                  icon="assets/img/lock.png"
                />
              </div>

              <button className="bg-[#FD915A] text-white font-bold text-xl text-center h-[48px] w-full rounded-3xl mt-[20px] hover:bg-white hover:text-[#FD915A] transition-all duration-300 ease-in-out hover:border-[2px] hover:border-[#FD915A] shadow-xl">
                Create My Account
              </button>
            </div>
          </form>
        </div>

        <div className="w-full text-center mt-[30px] mb-[100px]">
          <Link
            to="/login"
            className="font-bold underline hover:text-blue-500"
          >
            Sign In to My Account
          </Link>
        </div>
      </section>
    </>
  )
}
