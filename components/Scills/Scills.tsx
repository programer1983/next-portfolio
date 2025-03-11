import Image from 'next/image'
import { scillstData } from '../../Data/header-data'
import './Scills.scss'

const Scills = () => {
  return (
    <section className='scills'>
          <div className="container">
            <h2 className="scills__title title">Мої технології</h2>
            <ul className="scills__list">
                {scillstData.map((data) => (
                   <li className='scills__list-item' key={data.id}>
                     <Image 
                        src={data.src} 
                        alt={data.name}
                        width={190}
                        height={210}
                        className="scills__list-image" 
                     />
                     <h3 className="scills__list-name">{data.name}</h3>
                   </li>
                ))}
            </ul>
          </div>
    </section>
  )
}

export default Scills