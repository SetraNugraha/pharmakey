import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export default function UserProfile() {
  return (
    <>
      <section className="h-full">
        <div className="pt-[30px] px-[16px] flex items-center">
          {/* Header */}
          <Link
            to="/"
            className="p-2 bg-white flex justify-center items-center rounded-full hover:bg-red-500 transition-all duration-200 ease-in-out group"
          >
            <img
              src="assets/img/arrow-left.png"
              alt="back-button"
              className="group-hover:filter group-hover:invert group-hover:brightness-0"
            />
          </Link>
          <h1 className="font-bold text-xl absolute left-1/2 -translate-x-1/2">Profile</h1>
        </div>

        {/* Image & Username */}
        <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
          <img
            src="assets/img/profile-default.png"
            alt="product"
            className="h-[120px] max-w-[150px] p-2 bg-white rounded-full"
          />
          <div className="text-center leading-[1]">
            <h1 className="font-bold text-xl">Setra Nugraha</h1>
            <p className="font-semibold text-slate-500">Customer</p>
          </div>
        </div>

        {/* Data User */}
        <div className="px-[16px] pb-[200px]">
          <div className="bg-white mt-[20px] rounded-t-[60px] rounded-b-[60px]">
            {/* Address */}
            <div className="p-5 bg-white rounded-[24px] mt-[10px]">
              <div className="flex flex-col gap-y-5">
                {/* Address */}
                <div className="flex flex-col gap-y-3">
                  <h1 className="font-semibold">Address : </h1>
                  <div className="flex items-center gap-x-2 ml-3">
                    <img
                      src="assets/img/location.png"
                      alt="city"
                    />
                    <p className="text-slate-400 font-semibold tracking-wider">Puri Nirwana 2, Cikaret, Cibinong</p>
                  </div>
                </div>

                {/* City */}
                <div className="flex flex-col gap-y-3">
                  <h1 className="font-semibold">City : </h1>
                  <div className="flex items-center gap-x-2 ml-3">
                    <img
                      src="assets/img/city.png"
                      alt="city"
                    />
                    <p className="text-slate-400 font-semibold tracking-wider">Kab. Bogor</p>
                  </div>
                </div>

                {/* Post Code */}
                <div className="flex flex-col gap-y-3">
                  <h1 className="font-semibold">Post Code : </h1>
                  <div className="flex items-center gap-x-2 ml-3">
                    <img
                      src="assets/img/house.png"
                      alt="post_code"
                    />
                    <p className="text-slate-400 font-semibold tracking-wider">19023</p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-y-3">
                  <h1 className="font-semibold">Phone Number : </h1>
                  <div className="flex items-center gap-x-2 ml-3">
                    <img
                      src="assets/img/call.png"
                      alt="post_code"
                    />
                    <p className="text-slate-400 font-semibold tracking-wider">081244330918</p>
                  </div>
                </div>

                <Link
                  to="/update-profile"
                  className="text-center mt-[10px] tracking-wider px-6 py-3 bg-[#FD915A] text-white font-bold rounded-[50px] hover:bg-white hover:text-[#FD915A] hover:ring-2 hover:ring-[#FD915A]"
                >
                  Update Profile
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <Navbar />
      </section>
    </>
  )
}
