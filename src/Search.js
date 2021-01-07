import React from 'react'

const Search = (props) => {
    const {term, handleChange} = props
    return (
        <input type="text" value={term} className="form-control" onChange={handleChange} placeholder="search by name or mobile"/>
    )
}

export default Search