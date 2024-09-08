import { Outlet } from 'react-router-dom'

export const UserLayout = () => {
  return (
    <section className="max-w-md mx-auto bg-[#F7F1F0] ">
      <Outlet />
    </section>
  )
}
