import Image from 'next/image'
import { CarCard, Hero } from '@/components'
import { fuels, yearsOfProduction } from '@/constants'

import { SearchBar, CustomFilter } from '@/components'
import { fetchCars } from '@/utils'

export default async function Home() {
  const allCars = await fetchCars()

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className="">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore our cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className=" home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-xl font-bold text-black"> Oops,no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
