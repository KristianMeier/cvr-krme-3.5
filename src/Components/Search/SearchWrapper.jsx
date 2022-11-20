import { useState } from 'react'
import { TextInput } from '../Other/TextInput'
import { Search } from './Search'

export const SearchWrapper = () => {
  const [searchField, setSearchField] = useState('')

  return (
    <div className='search'>
      <div className='search-container'>
        <h2 className='search-title'>Search the CVR</h2>
        <TextInput
          className='search-input'
          type='search'
          placeholder='Search for the company here...'
          onChange={(e) => setSearchField(e.target.value)}
        />
        <Search searchField={searchField} />
      </div>
    </div>
  )
}
