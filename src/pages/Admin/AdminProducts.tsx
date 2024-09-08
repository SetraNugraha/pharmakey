import { MdEditSquare, MdDelete } from 'react-icons/md'
import { IoListCircleSharp } from 'react-icons/io5'

interface Products {
  id: number
  category_id: number
  image: string
  name: string
  slug: string
  price: number
  about: string
}

const products: Products[] = [
  {
    id: 1,
    category_id: 1,
    image: 'med1',
    name: 'Softovac Rami',
    slug: 'softovac-rami',
    price: 34000,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },

  {
    id: 2,
    category_id: 2,
    image: 'med2',
    name: 'Enoki Softovac',
    slug: 'enoki-softovac',
    price: 87000,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },

  {
    id: 3,
    category_id: 3,
    image: 'med3',
    name: 'Panadomal',
    slug: 'panadomal',
    price: 56000,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },

  {
    id: 4,
    category_id: 4,
    image: 'med4',
    name: 'Enoki Softovac Pro',
    slug: 'enoki-softovac-pro',
    price: 112000,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]

export default function AdminProducts() {
  return (
    <>
      <section className="px-10 py-2">
        <div>
          <h1 className="font-bold text-2xl mb-5">Products</h1>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    {/* Icon */}
                    <td className="py-3 flex justify-center items-center">
                      <img src={`/assets/img/${product.image}.png`} alt="image-product" className="h-[45px]" />
                    </td>
                    {/* name */}
                    <td className="py-3 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.name}</td>
                    {/* Price */}
                    <td className="py-3 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}
                    </td>
                    {/* Action Button */}
                    <td className="py-3 flex items-center justify-center gap-x-3">
                      <a href="#">
                        <IoListCircleSharp size={30} className="text-green-500 hover:text-sky-400 duration-200" />
                      </a>
                      <a href="#">
                        <MdEditSquare size={30} className="text-yellow-500 hover:text-blue-500 duration-200" />
                      </a>
                      <a href="#">
                        <MdDelete size={30} className="text-red-500 hover:text-slate-400 duration-200" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
