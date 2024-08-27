export const Hero = () => {
  return (
    <>
      <div className="pt-[30px] px-[16px]">
        <h1 className="text-[38px] font-extrabold text-center pb-[10px] leading-tight">
          We Provide{' '}
          <span>
            <br />
            Best Medicines
          </span>
        </h1>

        {/* Search Input */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search by product name"
            className="w-full h-[52px] rounded-[50px] px-[16px] placeholder:text-[16px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FD915A]"
          />
          <button>
            <img
              src="assets/img/search.png"
              alt="search-icon"
              className="absolute top-[16px] right-[16px]"
            />
          </button>
        </div>

        <div className="relative pt-[30px] w-full">
          {/* Hero Decor  */}
          <img
            src="assets/img/hero-decor.png"
            alt="hero-decor"
            className="bg-[#E6D3F8] rounded-[15px] h-[98px] w-full"
          />

          {/* Desc */}
          <div className="absolute top-[45px] flex items-center justify-between w-full px-[20px]">
            <h1 className="font-bold text-[18px] w-[180px]">Your last order has been proceed</h1>
            <img
              src="assets/img/give-medicine.png"
              alt="hero-decor"
            />
          </div>
        </div>
      </div>
    </>
  )
}
