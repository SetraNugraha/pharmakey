import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { InputField } from '../components/InputField'
import { Navbar } from '../components/Navbar'

interface Products {
  product_image: string
  name: string
  price: number
}

const carts: Products[] = [
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

type PaymentMethod = 'transfer' | 'manual'

export default function Carts() {
  const [showItems, setShowItems] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)

  const navigate = useNavigate()

  const handleSelectedMethod = (method: PaymentMethod) => {
    setPaymentMethod(method)
  }

  return (
    <>
      <section className="">
        {/* Header */}
        <div className="pt-[30px] px-[16px] flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="p-2 bg-white flex justify-center items-center rounded-full ring-1 ring-black hover:ring-0 hover:bg-red-500 transition-all duration-200 ease-in-out group">
            <img src="assets/img/arrow-left.png" alt="back-button" className="group-hover:filster group-hover:invert group-hover:brightness-0" />
          </button>
          <h1 className="font-semibold text-xl">Shopping Carts</h1>
          <div></div>
        </div>

        {/* Items / Products */}
        <div className="mt-[30px] px-[16px]">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl">Items</h1>
            <button onClick={() => setShowItems(!showItems)} className="p-2 bg-white rounded-full hover:bg-[#FD915A] transition-all duration-300 ease-in-out group">
              <img
                src={`assets/img/arrow-${showItems ? 'up' : 'down'}.png`}
                alt="button-down"
                className="group-hover:filster group-hover:invert group-hover:brightness-0 transition-all duration-300 ease-in-out"
              />
            </button>
          </div>
          {showItems && (
            <div className="mt-[10px] flex flex-col gap-y-3">
              {carts.map((item, index) => (
                <button key={index} className="flex items-center justify-between gap-x-2 px-5 py-3 bg-white rounded-[16px] shrink-0 hover:bg-[#FD915A] transition-all duration-300 ease-in-out group">
                  {/* Products */}
                  <div className="flex items-center  gap-x-3">
                    <img src={`assets/img/${item.product_image}.png`} alt="product-image" className="w-[70px] h-[70px] object-contain" />
                    <div className="flex flex-col gap-y-1 items-start">
                      <h1 className="font-bold group-hover:text-white text-start">{item.name}</h1>
                      <p className="font-semibold text-slate-400 group-hover:text-white">Rp. {item.price}</p>
                    </div>
                  </div>

                  {/* Delete Button */}
                  <button className="p-2 bg-red-500 rounded-full hover:bg-slate-400 transition-all duration-200 ease-in-out">
                    <img src="assets/img/trash.png" alt="trash" />
                  </button>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details Payment */}
        <div className="mt-[30px] px-[16px]">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl">Detail Payment</h1>
            <button onClick={() => setShowPayment(!showPayment)} className="p-2 bg-white rounded-full hover:bg-[#FD915A] transition-all duration-300 ease-in-out group">
              <img
                src={`assets/img/arrow-${showPayment ? 'up' : 'down'}.png`}
                alt="button-down"
                className="group-hover:filster group-hover:invert group-hover:brightness-0 transition-all duration-300 ease-in-out"
              />
            </button>
          </div>

          {/* Payment */}
          {showPayment && (
            <div className="mt-[10px] px-5 py-7 bg-white rounded-[24px] flex flex-col gap-y-5">
              {/* Sub Total */}
              <div className="flex items-center justify-between">
                <h1>Sub Total</h1>
                <p className="font-bold">Rp. 274.000</p>
              </div>

              {/* PPN */}
              <div className="flex items-center justify-between">
                <h1>PPN 11%</h1>
                <p className="font-bold">Rp. 76.000</p>
              </div>

              {/* Insurance */}
              <div className="flex items-center justify-between">
                <h1>Insurance 23%</h1>
                <p className="font-bold">Rp. 134.000</p>
              </div>

              {/* Delivery */}
              <div className="flex items-center justify-between">
                <h1>Delivery {'(Promo)'}</h1>
                <p className="font-bold">Rp. 274.000</p>
              </div>

              {/* Grand Total */}
              <div className="flex items-center justify-between">
                <h1>Grand Total</h1>
                <p className="font-bold text-[#FD915A]">Rp. 434.000</p>
              </div>
            </div>
          )}
        </div>

        {/* Payment Method */}
        <div className="mt-[30px] px-[16px]">
          <div>
            <h1 className="font-bold">Payment Method</h1>

            {/* Button */}
            <div className="flex items-center justify-between mt-[10px] gap-4">
              <button
                onClick={() => handleSelectedMethod('transfer')}
                className={`w-1/2 flex items-center gap-x-3 py-3 px-7 bg-white rounded-[16px] hover:outline-none hover:ring-1 hover:ring-[#F39D84] ${
                  paymentMethod === 'transfer' ? 'border-[2px] border-[#F39D84]' : ''
                }`}>
                <img src="assets/img/transfer.png" alt="transfer" className="p-2 bg-[#98B1FC] rounded-full" />
                <p className="font-semibold">Transfer</p>
              </button>

              <button
                onClick={() => handleSelectedMethod('manual')}
                className={`w-1/2 flex items-center gap-x-3 py-3 px-7 bg-white rounded-[16px] hover:outline-none hover:ring-1 hover:ring-[#F39D84] ${
                  paymentMethod === 'manual' ? 'border-[2px] border-[#F39D84]' : ''
                }`}>
                <img src="assets/img/manual.png" alt="manual" className="p-2 bg-[#F39D84] rounded-full" />
                <p className="font-semibold">Manual</p>
              </button>
            </div>

            {/* Description Payment */}
            <div className="mt-[12px] p-5 bg-white rounded-[24px]">
              {/* Null */}
              {paymentMethod === null && (
                <div>
                  <h1 className="font-semibold text-center">Please select a payment method</h1>
                </div>
              )}

              {/* Transfer Method */}
              {paymentMethod === 'transfer' && (
                <div>
                  <h1 className="font-bold">Transfer to</h1>
                  <div className="flex flex-col gap-y-3 mt-5">
                    <div className="flex items-center gap-x-3">
                      <img src="assets/img/bank.png" alt="bank" />
                      <h1 className="font-semibold">Bank Pharmakey Healty</h1>
                    </div>

                    <div className="flex items-center gap-x-3">
                      <img src="assets/img/card-payment.png" alt="card-payment" />
                      <h1 className="font-semibold">0812931283123</h1>
                    </div>
                  </div>
                </div>
              )}

              {/* Manual Method */}
              {paymentMethod === 'manual' && (
                <div>
                  <h1 className="font-bold">Manual Payment</h1>
                  <div className="flex flex-col gap-y-3 mt-5">
                    <div className="flex items-center gap-x-3">
                      <img src="assets/img/bank.png" alt="bank" />
                      <h1 className="font-semibold">take a photo when the medicine arrives.</h1>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Delivery */}
        <div className="mt-[30px] pb-[50px] px-[16px]">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl">Delivery to</h1>
          </div>

          {/* Data User */}
          <div className="p-5 bg-white rounded-[24px] mt-[10px]">
            <div>
              <form action="" className="flex flex-col gap-y-5">
                <InputField label="Address" name="address" type="text" placeholder="address" icon="assets/img/location.png" />

                <InputField label="City" name="city" type="text" placeholder="City" icon="assets/img/city.png" />

                <InputField label="Post Code" name="post_code" type="text" placeholder="Post Code" icon="assets/img/house.png" />

                <InputField label="Phone Number" name="phone_number" type="number" placeholder="Phone Number" icon="assets/img/call.png" />

                <div className="relative">
                  <label htmlFor="note" className="font-semibold">
                    Add. Note
                  </label>
                  <textarea
                    name="note"
                    id="note"
                    placeholder="Add Note"
                    className="w-full h-full px-12 py-3 mt-2 border border-slate-300 rounded-2xl placeholder:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#FD915A]"></textarea>
                  <img src="assets/img/note.png" alt="note" className="absolute top-[47px] left-[15px]" />
                </div>

                {/* Proof Payment */}
                <div>
                  <label htmlFor="proof" className="font-bold">
                    Proof of Payment
                  </label>
                  <div className="mt-[10px]">
                    <label
                      htmlFor="proof"
                      className="flex items-center gap-x-3 cursor-pointer py-3 text-slate-400 px-3 border border-slate-300 rounded-3xl placeholder:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#FD915A]">
                      <img src="assets/img/folder.png" alt="proof" className="cursor-pointer" />
                      Select Picture Here
                    </label>
                    <input id="proof" type="file" className=" hidden" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Price Total */}
        <div className="pb-[170px] px-[16px]">
          <div className="flex items-center justify-between p-5 bg-black rounded-[23px]">
            <div>
              <p className="text-gray-300 text-xs font-semibold">Grand Total</p>
              <h1 className="text-2xl text-white font-bold">Rp. 723.543</h1>
            </div>

            <Link to="/finish-checkout" className="tracking-wider px-6 py-3 bg-[#FD915A] text-white font-bold rounded-[50px] hover:bg-white hover:text-[#FD915A] hover:ring-2 hover:ring-[#FD915A]">
              Confirm
            </Link>
          </div>
        </div>

        {/* Navbar */}
        <Navbar />
      </section>
    </>
  )
}
