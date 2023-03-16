import React from 'react'
import { useGlobalContext } from '../context'
function Search() {
  const {searchTerm,setSearchTerm} = useGlobalContext()

  const handleSubmit =(e)=>{
    e.preventDefault();
  }
  return (
    <div className="searchs">
      <div className='search-container'>
        <h2 className='search-title'>search your favorite cocktails</h2>
        <div className='forms' onClick={handleSubmit}>
          <form>
            <input type='text'
                    className='form-content' 
                    placeholder="typing your drink"
                    onChange={(e)=>setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search
