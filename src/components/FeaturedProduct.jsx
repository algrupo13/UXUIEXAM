import './FeaturedProduct.css'
import { featuredProduct, formatPrice } from '../data/products'
import visaLogo from '../assets/payments/visa.svg'
import mastercardLogo from '../assets/payments/mastercard.svg'
import webpayLogo from '../assets/payments/webpay.svg'
import mercadoPagoLogo from '../assets/payments/mercado-pago.svg'
import paypalLogo from '../assets/payments/paypal.svg'

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

        <div className="featured__payments">
          <span className="featured__payments-label">Pagos seguros con</span>
          <div className="featured__payments-row">
            <img className="featured__payment-icon featured__payment-icon--visa" src={visaLogo} alt="Visa" />
            <img className="featured__payment-icon featured__payment-icon--mastercard" src={mastercardLogo} alt="Mastercard" />
            <img className="featured__payment-icon featured__payment-icon--webpay" src={webpayLogo} alt="Webpay Plus" />
            <img className="featured__payment-icon featured__payment-icon--mercado" src={mercadoPagoLogo} alt="Mercado Pago" />
            <img className="featured__payment-icon featured__payment-icon--paypal" src={paypalLogo} alt="PayPal" />
          </div>
          <div className="featured__payments-seal">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            <span>Pago 100% encriptado y seguro</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProduct
