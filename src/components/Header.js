import React from 'react'

function Header({handleToggleDarkMode}) {
  return (
    <div className='header'>
<h1>Notes</h1>
<button onClick={()=>handleToggleDarkMode((previosDarkMode)=>!previosDarkMode)} className='save'>Dark Mode</button>
    </div>
  )
}

export default Header