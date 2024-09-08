import { MdEditSquare, MdDelete } from 'react-icons/md'

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
  return (
    <>
      <section className="px-10 py-2">
        <div>
          <h1 className="font-bold text-2xl mb-5">Category</h1>

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
                      <img src={`/assets/img/icon-${category.icon}.png`} alt="icon-category" className="h-[35px]" />
                    </td>
                    {/* name */}
                    <td className="py-3 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">{category.name}</td>
                    {/* Action Button */}
                    <td className="py-3 flex items-center justify-center gap-x-3">
                      <a href="#">
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
      </section>
    </>
  )
}
