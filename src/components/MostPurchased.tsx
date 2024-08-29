interface MostPurchased {
  product_image: string
  name: string
  price: number
}

const mostPurchased: MostPurchased[] = [
  {
    product_image: 'med1',
    name: 'Softovac Rami',
    price: 34000,
  },
  {
    product_image: 'med2',
    name: 'Panadomal',
    price: 56000,
  },
  {
    product_image: 'med3',
    name: 'Enoki Softovac Pro',
    price: 112000,
  },
]

export const MostPurchased = () => {
  return (
    <>
      <div className="pt-[30px] pb-[150px] px-[16px]">
        <h1 className="text-[22px] font-bold">Most Purchased</h1>

        <div className="mt-[10px] flex flex-col gap-y-5 overflow-x-auto scrollbar-hide">
          {mostPurchased.map((item, index) => (
            <button
              key={index}
              className="flex items-center justify-between gap-x-2 px-5 py-3 bg-white rounded-[16px] shrink-0 hover:bg-[#FD915A] transition-all duration-300 ease-in-out group"
            >
              {/* Products */}
              <div className="flex items-center  gap-x-3">
                <img
                  src={`assets/img/${item.product_image}.png`}
                  alt="product-image"
                  className="w-[70px] h-[70px] object-contain"
                />
                <div className="flex flex-col gap-y-1 items-start">
                  <h1 className="font-bold group-hover:text-white text-start">{item.name}</h1>
                  <p className="font-semibold text-slate-400 group-hover:text-white">Rp. {item.price}</p>
                </div>
              </div>

              {/* 5 Star */}
              <div>
                <img
                  src="assets/img/star.png"
                  alt="star"
                  className="group-hover:filter group-hover:brightness-0 group-hover:invert"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
