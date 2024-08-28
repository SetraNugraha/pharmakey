import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Categories } from '../components/Categories'
import { LatestProducts } from '../components/LatestProducts'
import { ExploreDoctor } from '../components/ExploreDoctor'
import { MostPurchased } from '../components/MostPurchased'
import { Navbar } from '../components/Navbar'

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

      <section>
        <ExploreDoctor />
      </section>

      <section>
        <MostPurchased />
      </section>

      <section>
        <Navbar />
      </section>
    </>
  )
}
