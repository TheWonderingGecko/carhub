'use client'

import { useState } from 'react'
import { SearchManufacturer } from '@/components'

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState('')
  return (
    <form className="searchbar">
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  )
}
export default SearchBar
