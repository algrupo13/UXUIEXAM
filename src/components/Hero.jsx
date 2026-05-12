import { useState } from 'react'
import './Hero.css'

function Hero() {
  const [toastVisible, setToastVisible] = useState(true)
  const [showPromo, setShowPromo] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const openPromo = () => setShowPromo(true)
  const closePromo = () => setShowPromo(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Código enviado a ${email}`)
    closePromo()
    setName('')
    setEmail('')
  }

  return (
    <section className="hero">
      <div className="hero__image-section">
        <img
          className="hero__image"
          src="/img/DSC1947-scaled.webp"
          alt="Sahumerios, resinas y hierbas naturales dispuestas artesanalmente"
        />
        {toastVisible && (
          <div className="hero__toast" onClick={openPromo} role="button" tabIndex={0}>
            <span>Magia aquí</span>
            <button
              className="hero__toast-close"
              aria-label="Cerrar"
              onClick={(e) => { e.stopPropagation(); setToastVisible(false) }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
        )}
      </div>

      {showPromo && (
        <>
          <div className="promo-overlay" onClick={closePromo} />
          <div className="promo-modal" role="dialog" aria-modal="true">
            <button className="promo-modal__close" onClick={closePromo} aria-label="Cerrar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <h2 className="promo-modal__title">10% off en toda la tienda</h2>
            <p className="promo-modal__subtitle">Recíbelo al dejar tus datos</p>

            <form className="promo-modal__form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="promo-modal__input"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                className="promo-modal__input"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="promo-modal__button">
                Canjear Código
              </button>
            </form>

            <p className="promo-modal__disclaimer">
              Al registrarte, aceptas recibir correos electrónicos de marketing.
              Consulta nuestra política de privacidad y los términos de servicio
              para obtener más información.
            </p>
          </div>
        </>
      )}

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          <span>Sanación · Aromaterapia · Energía</span>
        </div>

        <h1 className="hero__title">
          Purifica tu <em className="hero__title-accent">alma</em> y tu espacio
        </h1>

        <p className="hero__subtitle">
          Herramientas reales para transformar tu energía y purificar tu espacio.
        </p>

        <p className="hero__description">
          Sahumerios, salvia blanca, copal y box rituales importados con respeto desde México, Perú y Argentina. Autorizados SAG Chile. 9 años acompañando procesos de sanación.
        </p>

        <ul className="hero__features">
          <li className="hero__feature">
            Productos artesanales de origen verificado, libres de tóxicos y con comercio justo
          </li>
          <li className="hero__feature">
            Compra por intención: abundancia, limpieza, armonía, conexión espiritual
          </li>
          <li className="hero__feature">
            Si no amas tu compra, devuélvela en los primeros 7 días
          </li>
        </ul>

        <button className="hero__cta">
          Encuentra tu ritual
        </button>

        <div className="hero__divider" />

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">9+</span>
            <span className="hero__stat-label">Años de Sanación</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">90+</span>
            <span className="hero__stat-label">Productos</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">100%</span>
            <span className="hero__stat-label">Natural</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
