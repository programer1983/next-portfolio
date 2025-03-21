import Image from 'next/image'
import { workstData } from '../../Data/header-data'
import './Works.scss'

const Works = () => {
  return (
    <section className='works' id="works">
        <div className="container">
            <h2 className="works__title title">Деякі мої навчальні проекти</h2>
            <div className="works__items">
                {workstData.map((data) => (
                    <article className='works__item' key={data.id}>
                        <a href="" className='works__link' data-aos="flip-left">
                            <div className="works__card">
                                <Image 
                                    src={data.src} 
                                    alt='image-site'
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                    className="works__image"
                                />
                            </div>
                            <p className="work__text">{data.text}</p>
                        </a>
                    </article>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Works