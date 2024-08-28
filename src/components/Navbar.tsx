const navbarLink = [
  {
    icon: 'home',
    title: 'Home',
    url: '#',
  },

  {
    icon: 'maps',
    title: 'Store',
    url: '#',
  },

  {
    icon: 'orders',
    title: 'Orders',
    url: '#',
  },

  {
    icon: 'profile',
    title: 'Profile',
    url: '#',
  },
]

export const Navbar = () => {
  return (
    <>
      <nav className="fixed bottom-10 mx-auto max-w-md w-full px-[16px]">
        <div className="bg-white shadow-lg shadow-gray-400 border boder-slate-200 rounded-[20px] ">
          <ul className="text-[#1B76FF] font-semibold flex justify-between items-center pt-3 px-[30px]">
            {navbarLink.map((item, index) => (
              <li
                key={index}
                className="relative flex flex-col items-center gap-y-1 cursor-pointer transition-all duration-300 ease-in-out  group pb-3"
              >
                <img
                  src={`assets/img/${item.icon}.png`}
                  alt={item.title}
                  className=" group-hover:hidden"
                />
                <img
                  src={`assets/img/${item.icon}-hover.svg`}
                  alt={item.title}
                  className="hidden group-hover:block"
                />
                <a
                  href={item.url}
                  className="group-hover:text-[#FD915A]"
                >
                  {item.title}
                </a>
                <span className="absolute bottom-0 w-full h-[5px] bg-[#FD915A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
