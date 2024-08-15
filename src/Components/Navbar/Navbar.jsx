import './Navbar.css'
import logo from '../../assets/logo.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 700)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} className='logo' alt='logo' />
      <div className='menu-toggle' onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to='hero' smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='program' smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to='campus' smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to='testimonials' smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
