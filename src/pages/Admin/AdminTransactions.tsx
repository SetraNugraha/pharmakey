type TransactionStatus = 'pending' | 'success' | 'canceled'

interface Transactions {
  total_price: number
  date: string
  status: TransactionStatus
}

const transactions: Transactions[] = [
  {
    total_price: 1230000,
    date: '25 September 2024',
    status: 'pending',
  },

  {
    total_price: 876000,
    date: '22 September 2024',
    status: 'success',
  },

  {
    total_price: 123000,
    date: '2 September 2024',
    status: 'canceled',
  },
]

export default function AdminTransactions() {
  return (
    <>
      <section className="px-10 py-5">
        <div>
          <h1 className="font-bold text-2xl mb-5">Transactions</h1>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-gray-500 dark:text-gray-400">
              <thead className="text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-center text-[14px]">
                  <th scope="col" className="py-3">
                    Total Transaction
                  </th>
                  <th scope="col" className="py-3">
                    Date
                  </th>
                  <th scope="col" className="py-3">
                    Status
                  </th>
                  <th scope="col" className="py-3">
                    <span className="sr-only">See Detail</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => {
                  return (
                    <tr key={index} className="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td scope="row" className="text-lg tracking-widest py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {transaction.total_price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}
                      </td>
                      <td className="text-lg  py-4">{transaction.date}</td>
                      <td
                        className={`my-3 p-2 tracking-wider text-white font-semibold inline-block rounded-lg uppercase ${
                          transaction.status === 'pending' ? 'bg-yellow-600' : transaction.status === 'success' ? 'bg-green-600' : 'bg-red-500'
                        }`}>
                        {transaction.status}
                      </td>
                      <td className="text-lg  py-4">
                        <a href="#" className="font-medium tracking-wider text-blue-500 hover:underline hover:text-white">
                          Detail
                        </a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
