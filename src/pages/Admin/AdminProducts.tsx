import { MdEditSquare, MdDelete, MdLibraryAdd } from 'react-icons/md'
import { IoListCircleSharp } from 'react-icons/io5'
import { useState } from 'react'
import Modal from '../../components/Admin/Modal'

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
  const [modalCreate, setModalCreate] = useState<boolean>(false)
  const [modalDetail, setModalDetail] = useState<boolean>(false)
  const [modalEdit, setModalEdit] = useState<boolean>(false)
  return (
    <>
      <section className="px-10 py-5">
        <div>
          {/* Title */}
          <h1 className="font-bold text-2xl mb-5">Products</h1>
          {/* Button Add New Product */}
          <button
            onClick={() => setModalCreate(true)}
            className="px-3 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 duration-200 mb-5 flex items-center gap-x-2 shadow-lg shadow-gray-300">
            <span>
              <MdLibraryAdd size={22} />
            </span>
            Create Product
          </button>

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
                      <img src={`/assets/img/${product.image}.png`} alt="image-product" className="h-[55px]" />
                    </td>
                    {/* name */}
                    <td className="py-3 tracking-widest text-[20px] text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.name}</td>
                    {/* Price */}
                    <td className="py-3 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}
                    </td>
                    {/* Action Button */}
                    <td className="py-3 flex items-center justify-center gap-x-3">
                      <a href="#" onClick={() => setModalDetail(true)}>
                        <IoListCircleSharp size={30} className="text-yellow-500 hover:text-sky-400 duration-200" />
                      </a>
                      <a href="#" onClick={() => setModalEdit(true)}>
                        <MdEditSquare size={30} className="text-green-500 hover:text-blue-500 duration-200" />
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

        {/* Create */}
        {modalCreate && (
          <Modal>
            <Modal.Header title="Create New Product" onClose={() => setModalCreate(false)} />
            <Modal.Body>
              <form action="" className="w-[500px] flex flex-col gap-y-3">
                {/* Product Name */}
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="name" className="font-semibold text-slate-500 ml-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Input product name here"
                    className="h-[40px] border border-slate-300 rounded-lg px-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Select Category */}
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="category" className="font-semibold text-slate-500 ml-1">
                    Product Name
                  </label>
                  <select
                    name="category_id"
                    id="category"
                    className="h-[40px] pl-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">
                    <option value="">Select Category</option>
                    <option value="1">Surgicals</option>
                    <option value="2">Vitamins</option>
                    <option value="3">Diabetes</option>
                    <option value="4">Fitness</option>
                  </select>
                </div>

                {/* Product Price */}
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="price" className="font-semibold text-slate-500 ml-1">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Input product price here"
                    className="h-[40px] border border-slate-300 rounded-lg px-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Product About */}
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="about" className="font-semibold text-slate-500 ml-1">
                    Description
                  </label>
                  <textarea
                    name="about"
                    id="about"
                    placeholder="Add description product"
                    rows={4}
                    className="border border-slate-300 rounded-lg px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>

                {/* Add Product Image*/}
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="product_image" className="font-semibold text-slate-500 ml-1">
                    Add Product Image
                  </label>
                  <input type="file" id="product_image" />
                </div>

                {/* Button Submit */}
                <button className="py-2 rounded-lg bg-blue-500 text-white font-semibold text-lg tracking-wider mt-5 shadow-xl hover:bg-blue-700 duration-300 active:bg-gray-500">
                  Submit
                </button>
              </form>
            </Modal.Body>
          </Modal>
        )}

        {/* Edit */}
        {modalEdit && (
          <Modal>
            <Modal.Header title="Edit Product" onClose={() => setModalEdit(false)} />
            <Modal.Body>
              <form action="" className="w-[500px] flex flex-col gap-y-3">
                {/* Product Name */}
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="name" className="font-semibold text-slate-500 ml-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Input product name here"
                    className="h-[40px] border border-slate-300 rounded-lg px-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Select Category */}
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="category" className="font-semibold text-slate-500 ml-1">
                    Product Name
                  </label>
                  <select
                    name="category_id"
                    id="category"
                    className="h-[40px] pl-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">
                    <option value="">Select Category</option>
                    <option value="1">Surgicals</option>
                    <option value="2">Vitamins</option>
                    <option value="3">Diabetes</option>
                    <option value="4">Fitness</option>
                  </select>
                </div>

                {/* Product Price */}
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="price" className="font-semibold text-slate-500 ml-1">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Input product price here"
                    className="h-[40px] border border-slate-300 rounded-lg px-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Product About */}
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="about" className="font-semibold text-slate-500 ml-1">
                    Description
                  </label>
                  <textarea
                    name="about"
                    id="about"
                    placeholder="Add description product"
                    rows={4}
                    className="border border-slate-300 rounded-lg px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>

                {/* Add Product Image*/}
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="product_image" className="font-semibold text-slate-500 ml-1">
                    Add New Product Image
                  </label>
                  <input type="file" name="image" id="product_image" />
                </div>

                {/* Button Submit */}
                <button className="py-2 rounded-lg bg-green-500 text-white font-semibold text-lg tracking-wider mt-5 shadow-xl hover:bg-green-700 duration-300 active:bg-gray-500">
                  Edit Product
                </button>
              </form>
            </Modal.Body>
          </Modal>
        )}

        {/* Detail */}
        {modalDetail && (
          <Modal>
            <Modal.Header title="Detail Product" onClose={() => setModalDetail(false)} />
            <Modal.Body>
              <section className="w-[600px] items-start flex gap-x-5">
                {/* Image */}
                <div className="flex flex-shrink-0">
                  <img src="/assets/img/med3.png" alt="product-image" className="w-[130px]" />
                </div>

                {/* Container Text */}
                <div className="flex flex-col gap-y-3">
                  <div className="flex">
                    {/* Product Name */}
                    <div className="flex flex-col gap-y-2 w-1/2 ">
                      <label htmlFor="name" className="font-bold text-slate-600 text-lg">
                        Product Name
                      </label>
                      <p className="font-semibold text-slate-500">Enoki Softovac Pro</p>
                    </div>

                    {/* Product Category */}
                    <div className="flex flex-col gap-y-2 w-1/2 pl-5">
                      <label htmlFor="name" className="font-bold text-slate-600 text-lg">
                        Category
                      </label>
                      <p className="font-semibold text-slate-500">Surgicals</p>
                    </div>

                    {/* Product Price */}
                    <div className="flex flex-col gap-y-2 w-1/3">
                      <label htmlFor="name" className="font-bold text-slate-600 text-lg">
                        Price
                      </label>
                      <p className="font-semibold text-slate-500">Rp. 112.000</p>
                    </div>
                  </div>

                  {/* Product About */}
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="name" className="font-bold text-slate-600 text-lg">
                      Description
                    </label>
                    <p className="font-semibold text-slate-500 text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </section>
            </Modal.Body>
          </Modal>
        )}
      </section>
    </>
  )
}
