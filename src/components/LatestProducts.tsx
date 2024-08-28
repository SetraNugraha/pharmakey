interface LatestProducts {
  product_image: string
  name: string
  price: number
}

const latestProducts: LatestProducts[] = [
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
  {
    product_image: 'med4',
    name: 'Enoki Softovac',
    price: 87000,
  },
]

export const LatestProducts = () => {
  return (
    <>
      <div className="pt-[30px] px-[16px]">
        <h1 className="text-[22px] font-bold">Latest Products</h1>

        <div className="mt-[10px] flex items-center gap-x-5 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {/* Card Categories */}
          {latestProducts.map((product, index) => (
            <button
              key={index}
              className="flex flex-col items-center gap-y-3 px-7 py-5 bg-white rounded-[16px] shrink-0 hover:bg-[#ef966a]  transition-all duration-300 ease-in-out group group"
            >
              <div className="">
                <img
                  src={`assets/img/${product.product_image}.png`}
                  alt="product-image"
                  className="w-[100px] h-[100px] object-contain"
                />
              </div>
              <div className="flex flex-col items-start">
                <h1 className="font-bold group-hover:text-white  transition-all duration-300 ease-in-out group">{product.name}</h1>
                <p className="text-slate-400 font-semibold group-hover:text-white  transition-all duration-300 ease-in-out group">Rp. {product.price}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
