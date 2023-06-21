'use client'

import Image from 'next/image'
import { CarCard, Hero, ShowMore } from '@/components'
import { fuels, manufacturers, yearsOfProduction } from '@/constants'

import { SearchBar, CustomFilter } from '@/components'
import { fetchCars } from '@/utils'
import { HomeProps } from '@/types'
import { use, useEffect, useState } from 'react'

export default function Home() {
  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)

  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')

  const [fuelType, setFuelType] = useState('')
  const [year, setYear] = useState(2022)

  const [limit, setLimit] = useState(10)

  const getCars = async () => {
    setLoading(true)
    try {
      const results = await fetchCars({
        manufacturer: manufacturer || '',
        model: model || '',
        fuelType: fuelType || '',
        year: year || 2022,
        limit: limit || 10,
      })
      setAllCars(results)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCars()
  }, [fuelType, year, limit, manufacturer, model])

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
          <SearchBar setManuFacturer={setManufacturer} setModel={setModel} />

          <div className=" home__filter-container">
            <CustomFilter
              title="fuelType"
              options={fuels}
              setFilter={setFuelType}
            />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            {loading && (
              <div className="w-full mt-16 flex-center">
                <Image
                  src="/loader.svg"
                  alt="loading"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
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

// import Image from 'next/image'
// import { CarCard, Hero, ShowMore } from '@/components'
// import { fuels, manufacturers, yearsOfProduction } from '@/constants'

// import { SearchBar, CustomFilter } from '@/components'
// import { fetchCars } from '@/utils'
// import { HomeProps } from '@/types'

// export default async function Home({ searchParams }: HomeProps) {
//   const allCars = await fetchCars({
//     manufacturer: searchParams.manufacturer || '',
//     model: searchParams.model || '',
//     fuelType: searchParams.fuelType || '',
//     year: searchParams.year || 2022,
//     limit: searchParams.limit || 10,
//   })

//   const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

//   return (
//     <main className="">
//       <Hero />
//       <div className="mt-12 padding-x padding-y max-width" id="discover">
//         <div className="home__text-container">
//           <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
//           <p>Explore our cars you might like</p>
//         </div>
//         <div className="home__filters">
//           <SearchBar />

//           <div className=" home__filter-container">
//             <CustomFilter title="fuelType" options={fuels} />
//             <CustomFilter title="year" options={yearsOfProduction} />
//           </div>
//         </div>
//         {!isDataEmpty ? (
//           <section>
//             <div className="home__cars-wrapper">
//               {allCars?.map((car) => (
//                 <CarCard car={car} />
//               ))}
//             </div>
//             <ShowMore
//               pageNumber={(searchParams.limit || 10) / 10}
//               isNext={(searchParams.limit || 10) > allCars.length}
//             />
//           </section>
//         ) : (
//           <div className="home__error-container">
//             <h2 className="text-xl font-bold text-black"> Oops,no results</h2>
//             <p>{allCars?.message}</p>
//           </div>
//         )}
//       </div>
//     </main>
//   )
// }
