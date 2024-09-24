import { useNavigate, Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

interface Transactions {
  total_price: number
  date: string
  status: string
  proof: boolean
}

const transactions: Transactions[] = [
  {
    total_price: 500000,
    date: '25-09-2024',
    status: 'pending',
    proof: false,
  },
  {
    total_price: 200000,
    date: '12-07-2024',
    status: 'success',
    proof: true,
  },
]

export default function Transactions() {
  const navigate = useNavigate()
  return (
    <>
      <section className="h-dvh">
        {/* Header */}
        <div className="pt-[30px] px-[16px] flex items-center justify-between">
          {/* Button Back */}
          <button
            onClick={() => navigate('/')}
            className="p-2 bg-white flex justify-center items-center rounded-full ring-1 ring-black hover:ring-0 hover:bg-red-500 transition-all duration-200 ease-in-out group">
            <img src="assets/img/arrow-left.png" alt="back-button" className="group-hover:filter group-hover:invert group-hover:brightness-0" />
          </button>
          {/* Tiitle */}
          <h1 className="font-semibold text-xl absolute left-1/2 -translate-x-[50%]">Orders</h1>
        </div>

        {/* Result Store */}
        <div className="mt-[30px] px-[16px]">
          <h1 className="font-bold tracking-wider">Your Transactions</h1>

          {/* Store */}
          <div className="mt-[10px] flex flex-col gap-y-5">
            {transactions.map((item, index) => (
              <>
                <div key={index} className="flex flex-col items-start bg-white p-5 rounded-xl shadow-lg shadow-gray-300 border border-slate-200">
                  {/* Detail Text */}
                  <div className="flex items-center justify-between w-full">
                    {/* Total Price */}
                    <div>
                      <h1 className="font-semibold tracking-wide text-sm text-slate-500">Total Price</h1>
                      <p className="font-bold">Rp. {item.total_price.toLocaleString('id-ID')}</p>
                    </div>

                    {/* Date */}
                    <div>
                      <h1 className="font-semibold tracking-wide text-sm text-slate-500">Date</h1>
                      <p className="font-bold">{item.date}</p>
                    </div>

                    {/* Status */}
                    <div>
                      <h1 className="font-semibold tracking-wide text-sm text-slate-500 flex flex-col justify-center items-center">Status</h1>
                      <p
                        className={`px-2 py-1 text-white font-semibold rounded-lg text-center uppercase text-[13px] tracking-wide ${
                          item.status === 'pending' ? 'bg-yellow-500' : item.status === 'success' ? 'bg-green-500' : 'bg-red-500'
                        }`}>
                        {item.status}
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="flex items-center gap-x-3 w-full mt-5">
                    {/* Detail */}
                    <Link
                      to={'/carts'}
                      className="px-3 py-1 bg-blue-500 text-white rounded-lg font-semibold shadow-lg shadow-gray-300 hover:text-blue-500 hover:bg-white hover:outline-none hover:ring-2 hover:ring-blue-500 duration-300">
                      Detail
                    </Link>

                    {/* Proof */}
                    {item.proof === false ? (
                      // False
                      <div className="cursor-pointer px-3 py-1 bg-[#FD915A] text-white rounded-lg font-semibold shadow-lg shadow-gray-300 hover:text-[#FD915A] hover:bg-white hover:outline-none hover:ring-2 hover:ring-[#FD915A] duration-300">
                        <label htmlFor="proof" className="cursor-pointer">
                          Send Proof
                        </label>
                        <input type="file" id="proof" className="hidden" />
                      </div>
                    ) : (
                      // True
                      <button disabled={item.proof} className="px-3 py-1 bg-gray-400 text-white rounded-lg font-semibold shadow-lg ">
                        Proof Accepted
                      </button>
                    )}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Navbar */}
        <Navbar />
      </section>
    </>
  )
}
