import React from 'react'
import {Link} from 'react-router-dom'

function Error() {
  return (
    <div className ="errors">
      <h2 className="errors-title">OOP !! this is error links</h2>
      <Link  to="/" className="error-back"><p >Back to home pages</p></Link>
    </div>
  )
}

export default Error
