import React from 'react'

const Filter = ({handleFilterChange}) => {
    return (
        <div>rajaa näytettäviä
        <input onChange={handleFilterChange}/>
        </div>
    )
}

export default Filter
