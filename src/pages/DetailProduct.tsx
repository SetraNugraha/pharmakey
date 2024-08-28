import { Link } from 'react-router-dom'

interface Grading {
  icon: string
  name: string
}

const gradingList: Grading[] = [
  {
    icon: 'popular',
    name: 'Popular',
  },
  {
    icon: 'grade',
    name: 'Grade A',
  },
  {
    icon: 'healty',
    name: 'Healty',
  },
  {
    icon: 'popular',
    name: 'Popular',
  },
  {
    icon: 'grade',
    name: 'Grade A',
  },
]

export default function DetailProduct() {
  return (
    <>
      <section className="h-dvhs">
        <div className="pt-[30px] px-[16px] flex items-center justify-between">
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
          <h1 className="font-semibold text-xl">Details</h1>
          <button>
            <img
              src="assets/img/dots.png"
              alt="setting-button"
              className="p-2 bg-white flex justify-center items-center rounded-full"
            />
          </button>
        </div>

        {/* Product Img */}
        <img
          src="assets/img/med2.png"
          alt="product"
          className="absolute top-[100px] left-1/2 -translate-x-1/2 h-[280px] max-w-[250px]"
        />

        {/* Detail */}
        <div className="bg-white mt-[280px] rounded-t-[60px]">
          <div className="pt-[60px] px-[24px]">
            <h1 className="font-bold text-2xl">Enoki Softovac Pro</h1>

            <div className="flex items-center justify-between mt-[16px]">
              {/* Category */}
              <div className="flex items-center gap-x-2">
                <img
                  src="assets/img/icon-fitness.png"
                  alt="category"
                  className="w-[30px] h-[30px]"
                />
                <h1 className="font-semibold">Fitness</h1>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-x-2">
                <img
                  src="assets/img/1-star.png"
                  alt="star"
                />
                <h1 className="font-semibold">4.5/5</h1>
              </div>
            </div>

            {/* Description */}
            <div className="mt-[15px]">
              <p className=" text-slate-600 leading-loose">Medicine good for your body even when don’t really need them so keep all without worrying about the life would be later.</p>
            </div>

            {/* Grading */}
            <div className="mt-[20px] flex items-center gap-x-5 overflow-x-auto scrollbar-hide">
              {gradingList.map((item, index) => (
                <div
                  key={index}
                  className="w-[100px] h-[100px] flex flex-col items-center justify-center gap-y-2 border border-slate-300 rounded-[16px] shrink-0"
                >
                  <img
                    src={`assets/img/${item.icon}.png`}
                    alt="grade"
                  />
                  <h1 className="font-semibold">{item.name}</h1>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="mt-[20px]">
              {/* text testimonial */}
              <p className="tracking-wider">My kid was happier whenever he is playing without artificial toys, full energy yeah!</p>
              <div className="mt-[10px] flex items-center justify-between">
                {/* user profile */}
                <div className="flex items-center gap-x-2">
                  <img
                    src="assets/img/user-profile.png"
                    alt="user-profile"
                    className="rounded-full"
                  />
                  <p className="font-semibold">Jhon Doe</p>
                </div>
                {/* Rating */}
                <img
                  src="assets/img/star.png"
                  alt="rating"
                />
              </div>
            </div>

            {/* Price */}
            <div className="mt-[20px] flex items-center justify-between pb-[50px]">
              <div className="flex flex-col items-start gap-y-1">
                <h1 className="text-2xl font-bold">Rp. 53.000</h1>
                <p className="text-slate-400">/quantity</p>
              </div>

              <div>
                <button className="px-6 py-3 bg-[#FD915A] text-white font-bold rounded-[50px] hover:bg-white hover:text-[#FD915A] transition-all duration-200 ease-in-out hover:border-[2px] hover:border-[#FD915A] shadow-xl">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
