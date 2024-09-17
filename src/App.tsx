import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// user
import Login from './pages/Login'
import Register from './pages/Register'
import UserProfile from './pages/UserProfile'
import UpdateProfile from './pages/UpdateProfile'
import Homepage from './pages/Homepage'
import Product from './pages/Product'
import StoreLocations from './pages/StoreLocations'
import Doctors from './pages/Doctors'
import DetailProduct from './pages/DetailProduct'
import SearchProduct from './pages/SearchProduct'
import Carts from './pages/Carts'
import FinishCheckout from './pages/FinishCheckout'
import { UserLayout } from './layouts/UserLayout'

// Admin
import AdminLogin from './pages/Admin/AdminLogin'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminCategory from './pages/Admin/AdminCategory'
import AdminProducts from './pages/Admin/AdminProducts'
import AdminTransactions from './pages/Admin/AdminTransactions'
import { AdminLayout } from './layouts/AdminLayout'

export default function App() {
  return (
    <Router>
      <Routes>
        {/* User Layout */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/store" element={<StoreLocations />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/detail-product" element={<DetailProduct />} />
          <Route path="/search-product" element={<SearchProduct />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/finish-checkout" element={<FinishCheckout />} />
        </Route>

        {/* Admin layout */}
        {/* Login */}
        <Route path="/admin/login" element={<AdminLogin />} />
        {/* Dashboard */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/category" element={<AdminCategory />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/transactions" element={<AdminTransactions />} />
        </Route>
      </Routes>
    </Router>
  )
}
