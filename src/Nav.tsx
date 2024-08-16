import { useState } from 'react'
import { one, two, three, four } from './assets/images'
import { RxHamburgerMenu } from 'react-icons/rx'
import { VscClose } from 'react-icons/vsc'


const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <nav className='bg-blue-200' >
      <div className='md:hidden'>
        {!openMenu ?
          <RxHamburgerMenu
            size={'30px'}
            onClick={toggleMenu} />
          :
          <VscClose
            size={'30px'}
            onClick={toggleMenu} />
        }
      </div>

      <div className={`${openMenu ? 'flex flex-col gap-6 px-3 md:flex md:flex-row md:gap-6' : 'hidden'}`}>
        <img src={one} alt="" className='h-16 w-1/4'/>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Services</h1>
        <h1>Team</h1>
      </div>
    </nav>
  )
}

export default Nav