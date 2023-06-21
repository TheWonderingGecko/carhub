'use client'

import { updateSearchParams } from '@/utils'
import { useRouter } from 'next/navigation'
import Custombutton from './Custombutton'
import { ShowMoreProps } from '@/types'

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const router = useRouter()

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10

    // Update the "limit" search parameter in the URL with the new value
    setLimit(newLimit)
  }

  return (
    <div className="w-full gap-5 mt-10 flex-center">
      {!isNext && (
        <Custombutton
          BtnType="button"
          title="Show More"
          ContainerStyles="bg-primary-blue rounded-full text-white"
          HandleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore

// const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
//   const router = useRouter()

//   const handleNavigation = () => {
//     // Calculate the new limit based on the page number and navigation type
//     const newLimit = (pageNumber + 1) * 10

//     // Update the "limit" search parameter in the URL with the new value
//     const newPathname = updateSearchParams('limit', `${newLimit}`)

//     router.push(newPathname)
//   }

//   return (
//     <div className="w-full gap-5 mt-10 flex-center">
//       {!isNext && (
//         <Custombutton
//           BtnType="button"
//           title="Show More"
//           ContainerStyles="bg-primary-blue rounded-full text-white"
//           HandleClick={handleNavigation}
//         />
//       )}
//     </div>
//   )
// }

// export default ShowMore
