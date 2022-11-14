import { useState } from 'react'
import { Search } from './Search'

export const SearchWrapper = () => {
  const [searchField, setSearchField] = useState('')

  return (
    <div className='search'>
      <section>
        <div className='title'>
          <h1>Search the CVR</h1>
        </div>
        <div>
          <input
            type='search'
            placeholder='Search for the company here...'
            onChange={(e) => setSearchField(e.target.value)}
          />
        </div>
        <Search searchField={searchField} />
      </section>
    </div>
  )
}
