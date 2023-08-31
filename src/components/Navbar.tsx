import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/image/logo.svg'

import { Button } from '.'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src={Logo}
          alt='logo'
          className='object-contain w-[100px] md:w-[150px]'
        />
      </Link>

      {/* <Button
        title='Sign in'
        btnType='button'
        containerStyles='text-primary-purple font-bold rounded-full bg-white min-w-[130px]'
      /> */}
    </nav>
  </header>
  )
}

export default Navbar