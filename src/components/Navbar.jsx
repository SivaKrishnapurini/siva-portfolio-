import { useState } from 'react'
import { useTheme } from '../context/useTheme'
import './Navbar.css'
import Switch from 'react-switch'


const Navbar = () =>{
    const {isDarkTheme, toggleTheme} = useTheme() 
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileView= () =>{
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    return(
        <div className={`nav ${isMobileMenuOpen && 'mobile-menu-open'} `}>
           <div className='nav__wrapper container'>
                <div className='nav__logo' >Siva Krishna P</div>
                <ul className={`nav__menu ${isMobileMenuOpen && 'mobile-menu'}`}>
                    <li className="nav__menu_items">
                        <a href='#home'>Home</a>
                    </li>
                    <li className="nav__menu_items">
                        <a href='#home'>Services</a>
                    </li>
                    <li className="nav__menu_items">
                        <a href='#home'>Skills</a>
                    </li>
                    <li className="nav__menu_items">
                        <a href='#home'>Portfolio</a>
                    </li>
                    <li className="nav__menu_items">
                    <a href='#home'>Contact</a>
                    </li>
                    <li className={`buttons buttonshire`}>
                        <label htmlFor='' className='swithc'>
                            <Switch 
                            height={24} 
                            width={48} 
                            onColor='#4D4D4D' 
                            offColor='#ccc'
                            onChange={toggleTheme}
                            checked = {isDarkTheme}
                             /></label>
                        <a href='' className='button'>Hire Me</a>
                        
                    </li>
                </ul>
           </div>
           <div className="hamburger-menu" onClick={toggleMobileView}>
            <div className={`bar ${isMobileMenuOpen && 'open'}`}></div>
            <div className={`bar ${isMobileMenuOpen && 'open'}`}></div>
            <div className={`bar ${isMobileMenuOpen && 'open'}`}></div>
           </div>
        </div>

    )
}

export default Navbar