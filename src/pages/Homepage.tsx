import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Categories } from '../components/Categories'
import { LatestProducts } from '../components/LatestProducts'

export default function Homepage() {
  return (
    <>
      <section>
        <Header />
      </section>

      <section>
        <Hero />
      </section>

      <section>
        <Categories />
      </section>

      <section>
        <LatestProducts />
      </section>
    </>
  )
}
