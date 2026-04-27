import './FeaturedProduct.css'
import { featuredProduct, formatPrice } from '../data/products'

function FeaturedProduct({ onAddToCart }) {
  return (
    <section className="featured">
      <div className="featured__wrapper">
        <div className="featured__badge">
          <span className="featured__badge-star">★</span>
          <span>{featuredProduct.badge}</span>
          <span className="featured__badge-star">★</span>
        </div>

        <div className="featured__image-wrapper">
          <img
            className="featured__image"
            src={featuredProduct.image}
            alt={featuredProduct.name}
            loading="lazy"
          />
        </div>

        <h2 className="featured__title">{featuredProduct.name}</h2>

        <p className="featured__description">{featuredProduct.description}</p>

        <div className="featured__price-row">
          <span className="featured__price-original">
            {formatPrice(featuredProduct.originalPrice)}
          </span>
          <span className="featured__price-current">
            {formatPrice(featuredProduct.price)}
          </span>
          <span className="featured__discount">
            -{featuredProduct.discountPercent}%
          </span>
        </div>

        <div className="featured__actions">
          <button className="featured__cta" onClick={() => onAddToCart(featuredProduct)}>
            <svg
              className="featured__cta-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 6h15l-1.5 9h-12z" />
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
              <path d="M6 6L5 3H2" />
            </svg>
            Comprar Ahora
          </button>
          <button className="featured__help" type="button">Ayuda / Uso</button>
        </div>

        <div className="featured__shipping">
          <span className="featured__shipping-label">Calcula tu envío</span>
          <div className="featured__shipping-form">
            <input className="featured__shipping-input" type="text" placeholder="Ingresa tu comuna" />
            <button className="featured__shipping-button" type="button">Calcular</button>
          </div>
          <p className="featured__shipping-note">Despacho estimado desde $3.990 según destino.</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProduct
