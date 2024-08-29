import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Homepage from './pages/Homepage'
import DetailProduct from './pages/DetailProduct'
import SearchProduct from './pages/SearchProduct'
import Carts from './pages/Carts'
import FinishCheckout from './pages/FinishCheckout'

export default function App() {
  return (
    <Router>
      <section className="bg-[#F7F1F0] ">
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/"
            element={<Homepage />}
          />

          <Route
            path="/detail-product"
            element={<DetailProduct />}
          />

          <Route
            path="/search-product"
            element={<SearchProduct />}
          />

          <Route
            path="/carts"
            element={<Carts />}
          />

          <Route
            path="/finish-checkout"
            element={<FinishCheckout />}
          />
        </Routes>
      </section>
    </Router>
  )
}
