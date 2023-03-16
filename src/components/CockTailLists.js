import React from 'react'
import Loading from "./Loading"
import CockTail from './CockTail'
import { useGlobalContext } from '../context'

function CockTailLists() {
  const {loading,cocktails}= useGlobalContext()
 
  if(loading){
    return <Loading/>
  }
  if(cocktails.length<1){
    return <p className='no-matching'>no drink is matching your searching</p>
  }
  return (
    <div class="cocktail-wap">
        {cocktails.map(cock => {
         return <CockTail key={cock.id} {...cock}/>
        })}
    </div>
  )
}

export default CockTailLists
