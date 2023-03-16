import React from 'react'
import {Link} from 'react-router-dom'

function CockTail({...cock}) {
    const {id,name,image,info,glass} = cock
  return (
    <article className='cocktails'>
        <div className='img-container'>
            <img src={image}/>
        </div>
        <div className='cocktail-footer'>
            <h3>{name}</h3>
            <h4>{glass}</h4>
            <p>{info}</p>
            <button className='btn btn-primary btn-details'>
              <Link to={`/single/${id}`}>Details</Link>
            </button>
        </div>
    </article>
  )
}

export default CockTail
