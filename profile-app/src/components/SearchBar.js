import React from 'react'
import '../styles/search-bar.css'
const SearchBar = ({userDetails, setSearchQuery}) => {
    const handleSubmit = (event) => {
        event.preventDefault ()
    }
    const handleSearch = (event) => {
        if (!event.target.value) {
            setSearchQuery(userDetails)
        }
        const filteredData = (userDetails.filter(function(data) {
            return (
            data.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
            data.firstName.toLowerCase().includes(event.target.value.toLowerCase()) ||
            data.lastName.toLowerCase().includes(event.target.value.toLowerCase())
        )
        }) )
        setSearchQuery(filteredData)
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
        <input type="text" placeholder="search by name..." name="search" onChange={handleSearch} />
        </form>
    </div>
  )
}

export default SearchBar