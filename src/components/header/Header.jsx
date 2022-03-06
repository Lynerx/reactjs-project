import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header className='header'>
      <div className='container header__container'>
        <h1>Tiago Lino</h1>
        <h5 className='text-light'>Fullstack Developer</h5>

        <CTA />
        <HeaderSocials />
        
        <div className='me'>
          <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>

      </div>
    </header>
  )
}

export default Header