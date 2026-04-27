import { useState } from 'react'
import './Hero.css'

function Hero() {
  const [toastVisible, setToastVisible] = useState(true)

  return (
    <section className="hero">
      <div className="hero__image-section">
        <img
          className="hero__image"
          src="/src/img/DSC1947-scaled.webp"
          alt="Sahumerios, resinas y hierbas naturales dispuestas artesanalmente"
        />
        {toastVisible && (
          <div className="hero__toast">
            <span>Magia aquí</span>
            <button className="hero__toast-close" aria-label="Cerrar" onClick={() => setToastVisible(false)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
        )}
      </div>

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
