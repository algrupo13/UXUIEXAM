import './AboutFounder.css'

function AboutFounder() {
  return (
    <section className="about-founder">
      <div className="about-founder__wrapper">
        <div className="about-founder__image-wrapper">
          <img
            className="about-founder__image"
            src="/img/founder/nano-banana-2026-02-24T20-07-32.webp"
            alt="Paola, fundadora de Adikari"
            loading="lazy"
          />
          <div className="about-founder__image-overlay">
            <blockquote className="about-founder__image-quote">
              <span className="about-founder__image-quote-mark">&ldquo;</span>
              No hay sanación sin honestidad.
              <span className="about-founder__image-quote-mark">&rdquo;</span>
            </blockquote>
          </div>
        </div>

        <div className="about-founder__content">
          <span className="about-founder__badge">Fundadora</span>

          <h2 className="about-founder__title">
            Hola, soy <em className="about-founder__title-accent">Paola</em>
          </h2>

          <p className="about-founder__text">
            Publicista de profesión, maestra de Reiki Karuna y terapeuta floral. Desde hace años acompaño procesos de sanación profunda, formándome en Terapia Floral Chilena y creando un método propio que mezcla varios sistemas florales.
          </p>

          <p className="about-founder__text">
            En 2016 nació Adikari, un proyecto con alma: ofrecer herramientas reales de sanación y productos de limpieza energética auténticos, importados con respeto y consciencia.
          </p>

          <p className="about-founder__text">
            Lo que hago no se trata solo de un producto: es transformación. Es sostener, guiar y acompañar con el corazón en la mano.
          </p>

          <a href="#" className="about-founder__link">
            Leer mi historia completa
          </a>

          <span className="about-founder__signature">— Paola</span>
        </div>
      </div>
    </section>
  )
}

export default AboutFounder
