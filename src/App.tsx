import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Homepage from './pages/Homepage'
import DetailProduct from './pages/DetailProduct'

export default function App() {
  return (
    <Router>
      <section className="bg-[#F7F1F0] ">
        <Routes>
          <Route
            path="/"
            element={<Homepage />}
          />

          <Route
            path="/detail-product"
            element={<DetailProduct />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />
        </Routes>
      </section>
    </Router>
  )
}
