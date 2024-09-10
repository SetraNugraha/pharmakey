import { useState } from 'react'
import Modal from '../../components/Admin/Modal'
import { MdEditSquare, MdDelete, MdLibraryAdd } from 'react-icons/md'

interface Categories {
  id: number
  icon: string
  name: string
}

const categories: Categories[] = [
  { id: 1, icon: 'fitness', name: 'Fitness' },
  { id: 2, icon: 'surgicals', name: 'Surgicals' },
  { id: 3, icon: 'diabetes', name: 'Diabetes' },
  { id: 4, icon: 'vitamins', name: 'Vitamins' },
]

export default function AdminCategory() {
  const [modalCreate, setModalCreate] = useState<boolean>(false)
  const [modalEdit, setModalEdit] = useState<boolean>(false)
  return (
    <>
      <section className="px-10 py-5">
        <div>
          {/* Title */}
          <h1 className="font-bold text-2xl mb-5">Category</h1>
          {/* Button Add New Category */}
          <button
            onClick={() => setModalCreate(true)}
            className="px-3 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 duration-200 mb-5 flex items-center gap-x-2 shadow-lg shadow-gray-300">
            <span>
              <MdLibraryAdd size={22} />
            </span>
            Create Category
          </button>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-5 py-3">
                    Icon
                  </th>
                  <th scope="col" className="px-5 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-5 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id} className="w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    {/* Icon */}
                    <td className="py-3 flex justify-center items-center">
                      <img src={`/assets/img/icon-${category.icon}.png`} alt="icon-category" className="h-[45px]" />
                    </td>
                    {/* name */}
                    <td className="py-3 tracking-widest text-xl text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">{category.name}</td>
                    {/* Action Button */}
                    <td className="py-3 flex items-center justify-center gap-x-3">
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

        {/* Modal Create Category */}
        {modalCreate && (
          <Modal>
            <Modal.Header title="Create Category" onClose={() => setModalCreate(false)} />
            <Modal.Body>
              <form action="" className="w-[500px] flex flex-col gap-y-3">
                {/* Category Name */}
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="name" className="font-semibold text-slate-500 ml-1">
                    Category Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Input category name here"
                    className="h-[40px] border border-slate-300 rounded-lg px-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Add icon*/}
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="name" className="font-semibold text-slate-500 ml-1">
                    Add Icon
                  </label>
                  <input type="file" id="icon" />
                </div>

                {/* Button Submit */}
                <button className="py-2 rounded-lg bg-blue-500 text-white font-semibold text-lg tracking-wider mt-5 shadow-xl hover:bg-blue-700 duration-300 active:bg-gray-500">
                  Submit
                </button>
              </form>
            </Modal.Body>
          </Modal>
        )}

        {/* Modal Edit Category */}
        {modalEdit && (
          <Modal>
            <Modal.Header title="Edit Category" onClose={() => setModalEdit(false)} />
            <Modal.Body>
              <form action="" className="w-[500px] flex flex-col gap-y-3">
                {/* Category Name */}
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="name" className="font-semibold text-slate-500 ml-1">
                    Category Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Input category name here"
                    className="h-[40px] border border-slate-300 rounded-lg px-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Add icon*/}
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="name" className="font-semibold text-slate-500 ml-1">
                    Add New Icon
                  </label>
                  <input type="file" id="icon" />
                </div>

                {/* Button Submit */}
                <button className="py-2 rounded-lg bg-green-500 text-white font-semibold text-lg tracking-wider mt-5 shadow-xl hover:bg-green-700 duration-300 active:bg-gray-500">
                  Edit Category
                </button>
              </form>
            </Modal.Body>
          </Modal>
        )}
      </section>
    </>
  )
}
