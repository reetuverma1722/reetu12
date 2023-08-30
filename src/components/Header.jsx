import React from 'react'

const Header = ({handleLogout}) => {
  return (
  <nav className=''>
<div className='container'>
    <div className='content'>
    <button   onClick={handleLogout}>Logout</button>
    </div>
</div>

  </nav>
  )
}

export default Header