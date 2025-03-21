
import './Hero.scss'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title" data-aos="fade-up">Мене звуть Дмитро</h1>
            <p className="hero__text" data-aos="fade-up" data-aos-delay="150">Розробляю сайти для компаній, агентств, приватних офісів</p>
          </div>
        </div>
    </section>
  )
}

export default Hero