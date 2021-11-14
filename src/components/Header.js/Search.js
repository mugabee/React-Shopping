import React from 'react'

const Search = () => {
    return (
    <div className="flex items-center justify-center ">
        <div className="flex border-2 border-gray-200 rounded">
            <input type="text" className="px-4 text-black py-2 w-80" placeholder="Search..."/>
            <button className="px-4 text-white bg-gray-600 border-l ">
                Search
            </button>
        </div>
    </div>
    )
}

export default Search
