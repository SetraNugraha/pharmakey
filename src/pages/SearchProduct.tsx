import { Link, useNavigate } from 'react-router-dom'
import { SearchInput } from '../components/SearchInput'

interface Products {
  product_image: string
  name: string
  price: number
}

const searchResults: Products[] = [
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

export default function SearchProduct() {
  const navigate = useNavigate()
  return (
    <>
      <section className="h-dvh px-[16px]">
        {/* Header */}
        <div className="pt-[30px] flex items-center justify-between">
          <Link
            to="/"
            className="p-2 bg-white flex justify-center items-center rounded-full ring-1 ring-black hover:ring-0 hover:bg-red-500 transition-all duration-200 ease-in-out group"
          >
            <img
              src="assets/img/arrow-left.png"
              alt="back-button"
              className="group-hover:filter group-hover:invert group-hover:brightness-0"
            />
          </Link>
          <h1 className="font-semibold text-xl  absolute left-1/2 -translate-x-[50%]">Search Products</h1>
        </div>

        {/* Search Input  */}
        <div className="mt-[30px]">
          <SearchInput />
        </div>

        {/* Result Search Product */}
        <div className="mt-[30px]">
          <h1 className="font-bold">Results</h1>

          {/* Products */}
          <div className="mt-[10px] flex flex-col gap-y-5">
            {searchResults.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate('/detail-product')}
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
      </section>
    </>
  )
}
