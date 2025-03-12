'use client';


import { useState } from 'react'
import { headerData } from '../../Data/header-data'
import MobileMenu from '../MobileMenu/MobileMenu'
import './Header.scss'


const Header = () => {
    const [activeMenu, setActiveMenu] = useState(false)

  return (
    <header className='header'>
        <MobileMenu activeMenu={activeMenu}/>
        <div className="container">
            <div className="header__inner">
                <ul className="header__list">
                {headerData.map((data) =>  (
                    <li className="header__item" key={data.name}>
                        <a href={data.path} className="header__link">{data.name}</a>
                    </li>
                ))}
                </ul>
                <div 
                    className={`header__burger ${activeMenu ? 'active' : ''}`}
                    onClick={() => setActiveMenu(!activeMenu)}
                >
                    <span></span>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header