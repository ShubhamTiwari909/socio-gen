"use client"
import React, { useState } from 'react'
import { Input } from './ui/input'
import Suggestions from './Suggestions'


const suggestions = [
    {
      name: 'John Doe',
      username: 'johndoe',
    },
    {
      name: 'Jane Doe',
      username: 'janedoe', 
    },
    {
      name: 'Jenny Doe',
      username: 'jennydoe',
    }
  ]
  

const SearchInput = () => {
    const [search, setSearch] = useState("")
    const filteredList = suggestions.filter((suggestion) => suggestion.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className='space-y-5'>
            <Input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search for an account' />
            {search && filteredList.length > 0 && <Suggestions list={filteredList} />}
        </div>
    )
}

export default SearchInput
