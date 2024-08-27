export const Header = () => {
  return (
    <>
      <header className="w-full px-[16px]">
        {/* Profile */}
        <div className="pt-[30px] flex items-center justify-between">
          <div className="flex gap-x-2 items-center">
            {/* Profile Image */}
            <div className="p-1 rounded-full bg-white">
              <img
                src="assets/img/profile-default.png"
                alt=""
              />
            </div>

            {/* Name & Role */}
            <div className="flex flex-col leading-tight">
              <h1 className="font-semibold text-[#FD915A] text-[16px]">Jhon Doe</h1>
              <h3 className="text-[14px]">Customer</h3>
            </div>
          </div>

          {/* Button */}
          <div className="flex items-center gap-x-2">
            {/* Notification */}
            <button className="relative p-2 rounded-full bg-white">
              <img
                src="assets/img/lonceng.png"
                alt="lonceng"
              />
              {/* Dot */}
              <div className="absolute top-[10px] right-[10px] w-[6px] h-[6px] rounded-full bg-[#FD915A]"></div>
            </button>

            {/* Cart */}
            <button className="p-2 rounded-full bg-white">
              <img
                src="assets/img/cart.png"
                alt="cart"
              />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
