import { Link } from 'react-router-dom'
import { InputField } from '../components/InputField'

export default function UpdateProfile() {
  return (
    <>
      <section className="pb-[50px]">
        <div className="pt-[30px] px-[16px] flex items-center">
          {/* Header */}
          <Link
            to="/profile"
            className="p-2 bg-white flex justify-center items-center rounded-full ring-1 ring-black hover:ring-0 hover:bg-red-500 transition-all duration-200 ease-in-out group"
          >
            <img
              src="assets/img/arrow-left.png"
              alt="back-button"
              className="group-hover:filter group-hover:invert group-hover:brightness-0"
            />
          </Link>
          <h1 className="font-bold text-xl absolute left-1/2 -translate-x-1/2">Profile</h1>
        </div>

        {/* Data User */}
        <div className="px-[16px]">
          <div className="bg-white mt-[20px] rounded-t-[60px] rounded-b-[60px]">
            <div className="p-5 bg-white rounded-[24px] mt-[10px]">
              <div>
                <form
                  action=""
                  className="flex flex-col gap-y-3"
                >
                  {/* Username */}
                  <InputField
                    label="Username"
                    name="username"
                    type="text"
                    placeholder="Username"
                    icon="assets/img/register-profile.png"
                  />

                  {/* Username */}
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    icon="assets/img/email.png"
                  />

                  {/* Address */}
                  <div className="relative">
                    <label
                      htmlFor="address"
                      className="font-semibold"
                    >
                      Address
                    </label>
                    <textarea
                      name="address"
                      id="address"
                      placeholder="Your address"
                      className="w-full h-full px-12 py-3 mt-2 border border-slate-300 rounded-2xl placeholder:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#FD915A]"
                    ></textarea>
                    <img
                      src="assets/img/location.png"
                      alt="note"
                      className="absolute top-[47px] left-[15px]"
                    />
                  </div>

                  <InputField
                    label="City"
                    name="city"
                    type="text"
                    placeholder="City"
                    icon="assets/img/city.png"
                  />

                  <InputField
                    label="Post Code"
                    name="post_code"
                    type="text"
                    placeholder="Post Code"
                    icon="assets/img/house.png"
                  />

                  <InputField
                    label="Phone Number"
                    name="phone_number"
                    type="number"
                    placeholder="Phone Number"
                    icon="assets/img/call.png"
                  />

                  {/* Photo Profile */}
                  <div>
                    <label
                      htmlFor="photo_profile"
                      className="font-bold"
                    >
                      Photo Profile
                    </label>
                    <div className="mt-[10px]">
                      <label
                        htmlFor="photo_profile"
                        className="flex items-center gap-x-3 cursor-pointer py-3 text-slate-400 px-3 border border-slate-300 rounded-3xl placeholder:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#FD915A]"
                      >
                        <img
                          src="assets/img/folder.png"
                          alt="photo_profile"
                          className="cursor-pointer"
                        />
                        Select Picture Here
                      </label>
                      <input
                        id="photo_profile"
                        name="photo_profile"
                        type="file"
                        className=" hidden"
                      />
                    </div>
                  </div>

                  <button className="text-center mt-[10px] tracking-wider px-6 py-3 bg-[#FD915A] text-white font-bold rounded-[50px] hover:bg-white hover:text-[#FD915A] hover:ring-2 hover:ring-[#FD915A] duration-300">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
