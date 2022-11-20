import { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { JsData } from '../../../Backend/Data'
import { NavbarLinks } from './NavbarLinks'

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  const toggleLinks = () => setShowLinks(!showLinks)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    showLinks
      ? (linksContainerRef.current.style.height = `${linksHeight}px`)
      : (linksContainerRef.current.style.height = '0px')
  }, [showLinks])

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <h1 className='nav-logo'> {JsData.logo} </h1>
          <button className='nav-toggle' onClick={() => toggleLinks()}>
            <FaBars />
          </button>
        </div>
        <NavbarLinks
          linksContainerRef={linksContainerRef}
          linksRef={linksRef}
        />
      </div>
    </nav>
  )
}
