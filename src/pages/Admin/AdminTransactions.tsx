import { useState } from 'react'
import Modal from '../../components/Admin/Modal'
import { transactions, carts } from './dummyData'

export default function AdminTransactions() {
  const [modalTransactionDetail, setModalTransactionDetail] = useState(false)
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
                        <a onClick={() => setModalTransactionDetail(true)} href="#" className="font-medium tracking-wider text-blue-500 hover:underline hover:text-white">
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

        {modalTransactionDetail && (
          <Modal>
            <Modal.Header title="Detail Transaction" onClose={() => setModalTransactionDetail(false)} />
            <Modal.Body>
              <div className="w-[800px]">
                {/* Header */}
                <div className="relative flex items-center justify-between pb-5">
                  {/* Total Transaction */}
                  <div>
                    <h1 className="text-slate-400 font-semibold">Total Transaction</h1>
                    <p className="font-bold text-xl tracking-wider">Rp. 1.257.000</p>
                  </div>

                  {/* Date */}
                  <div>
                    <h1 className="text-slate-400 font-semibold">Date</h1>
                    <p className="font-bold text-xl">25 September 2024</p>
                  </div>

                  {/* Status */}
                  <div>
                    <p className="py-2 px-3 bg-yellow-600 text-white font-semibold uppercase rounded-lg">pending</p>
                  </div>

                  {/* Horizontal line */}
                  <div className="absolute bottom-0 h-[2px] w-full border border-slate-300 opacity-50"></div>
                </div>

                <div className="flex items-start justify-between gap-x-20">
                  {/* Container Left Content */}
                  <div className="w-1/2">
                    {/* List Product */}
                    <h1 className="font-bold text-xl my-5 tracking-wide">List of Items</h1>
                    <div className="flex flex-col gap-y-3">
                      {carts.map((cart, index) => {
                        return (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-x-5">
                              <img src={`/assets/img/${cart.image}.png`} alt="product-image" className="w-[35px]" />
                              <div>
                                <h1 className="font-bold">{cart.name}</h1>
                                <p className="font-semibold text-slate-400">
                                  {cart.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}
                                </p>
                              </div>
                            </div>
                            <p className="font-semibold text-slate-500">quantity : {cart.quantity}</p>
                          </div>
                        )
                      })}
                    </div>

                    {/* Details of Delivery */}
                    <div>
                      <h1 className="font-bold text-xl my-5 tracking-wide">Details of Delivery</h1>

                      {/* Address */}
                      <div className="flex flex-col gap-y-5">
                        <div className="flex items-center justify-between">
                          <h1 className="font-semibold text-slate-400">Address</h1>
                          <p className="font-bold">Jl. Cikaret, Cibinong</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <h1 className="font-semibold text-slate-400">City</h1>
                          <p className="font-bold">Kab. Bogor</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <h1 className="font-semibold text-slate-400">Post Code</h1>
                          <p className="font-bold">18977</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <h1 className="font-semibold text-slate-400">Phone Number</h1>
                          <p className="font-bold">0812447621</p>
                        </div>
                      </div>
                      {/* Notes */}
                      <div className="flex flex-col mt-5">
                        <h1 className="font-semibold text-slate-400">Note : </h1>
                        <p className="font-bold">Rumah berada di ujung gang. </p>
                      </div>
                    </div>
                  </div>

                  {/* Container Right Content */}
                  <div className="w-1/2 pl-5">
                    {/* Proof of Payment */}
                    <h1 className="font-bold text-xl my-5 tracking-wide">Proof of Payment</h1>
                    <img src="/assets/img/proof-payment.jpeg" alt="proof-payment" className="border border-black max-h-[500px]" />
                  </div>
                </div>

                {/* Button */}
                <div className="relative my-5 flex items-center justify-between">
                  <div className="absolute top-0 h-[2px] w-full border border-slate-300 opacity-50"></div>
                  <button className="px-3 py-2 mt-5 bg-blue-500 text-white font-semibold rounded-lg tracking-wide shadow-xl hover:bg-green-600 duration-300">
                    Approve
                  </button>
                  <button className="px-3 py-2 mt-5 bg-red-500 text-white font-semibold rounded-lg tracking-wide shadow-xl hover:bg-gray-600 duration-300">Cancel</button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        )}
      </section>
    </>
  )
}
