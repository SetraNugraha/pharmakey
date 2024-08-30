import { Link } from 'react-router-dom'

interface Category {
  icon: string
  name: string
}

const categories: Category[] = [
  {
    icon: 'icon-fitness.png',
    name: 'Fitness',
  },

  {
    icon: 'icon-diabetes.png',
    name: 'Diabetes',
  },

  {
    icon: 'icon-vitamins.png',
    name: 'Vitamins',
  },

  {
    icon: 'icon-surgicals.png',
    name: 'Surgicals',
  },
]

export const Categories = () => {
  return (
    <>
      <div className="pt-[30px] px-[16px]">
        <div className="flex items-center justify-between">
          <h1 className="text-[22px] font-bold">Categories</h1>
          <div className="flex items-center gap-x-1 mr-3">
            <p className="text-xs text-slate-400 font-semibold">swipe</p>
            <img
              src="assets/img/arrow-right.png"
              alt="swipe"
              className="w-[15px] h-[15px] mt-1"
            />
          </div>
        </div>

        <div className="mt-[10px] flex items-center gap-x-5 overflow-x-auto scrollbar-hide">
          {/* Card Categories */}
          {categories.map((category, index) => (
            <Link
              to="/search-product"
              key={index}
              className="flex items-center gap-x-2 px-5 py-3 bg-white rounded-[16px] shrink-0 hover:text-white hover:bg-[#FD915A] transition-all duration-300 ease-in-out group"
            >
              <img
                src={`assets/img/${category.icon}`}
                alt="categories-icon"
                className="w-[40px] h-[40px] transition-all duration-300 ease-in-out group-hover:p-1 group-hover:bg-white group-hover:rounded-full"
              />
              <h1 className="font-bold">{category.name}</h1>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
