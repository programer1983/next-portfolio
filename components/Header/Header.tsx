import { headerData } from '../../Data/header-data'
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <div className="header__inner">
                <ul className="header__list">
                {headerData.map((data) =>  (
                    <li className="header__item" key={data.name}>
                        <a href={data.path} className="header__link">{data.name}</a>
                    </li>
                ))}
                </ul>
            </div>
        </div>

    </header>
  )
}

export default Header