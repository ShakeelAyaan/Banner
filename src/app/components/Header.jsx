
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (

    <div className='header'> 
      <section className='right-section'>
        <img src='' alt='logo'/>
       </section>
      <section className='left-section'>
      <Link href={"/"}>home</Link>
        <Link href={"/about"}>contact</Link>
        </section>
      </div>   

  )
}

export default Header