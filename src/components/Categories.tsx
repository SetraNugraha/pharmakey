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
        <h1 className="text-[22px] font-bold">Categories</h1>

        <div className="mt-[10px] flex items-center gap-x-5 overflow-x-auto scrollbar-hide">
          {/* Card Categories */}
          {categories.map((category, index) => (
            <button
              key={index}
              className="flex items-center gap-x-2 px-5 py-3 bg-white rounded-[16px] shrink-0 hover:text-white hover:bg-[#FD915A] transition-all duration-300 ease-in-out group"
            >
              <img
                src={`assets/img/${category.icon}`}
                alt="categories-icon"
                className="w-[40px] h-[40px] transition-all duration-300 ease-in-out group-hover:p-1 group-hover:bg-white group-hover:rounded-full"
              />
              <h1 className="font-bold">{category.name}</h1>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
