import { useNavigate } from 'react-router-dom'

export const SearchInput = () => {
  const navigate = useNavigate()
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search by product name"
        className="w-full h-[52px] rounded-[50px] px-[24px] font-semibold text-slate-700 placeholder:text-[16px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FD915A]"
      />
      <button onClick={() => navigate('/search-product')}>
        <img
          src="assets/img/search.png"
          alt="search-icon"
          className="absolute top-[16px] right-[24px]"
        />
      </button>
    </div>
  )
}
