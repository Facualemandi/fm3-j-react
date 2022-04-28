import React from 'react'
import logo from '../Images/logo.svg'
import '../Styles/Logo.css'

const Logo = () => {
  return (
      <>
      <section className='container_logo'>
         <img alt='splitter' src={logo} className='logo'/>
      </section>
      </>
  )
}

export default Logo