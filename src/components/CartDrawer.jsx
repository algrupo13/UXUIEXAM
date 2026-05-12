import './CartDrawer.css'
import { useState } from 'react'
import { formatPrice } from '../data/products'
import visaLogo from '../assets/payments/visa.svg'
import mastercardLogo from '../assets/payments/mastercard.svg'
import webpayLogo from '../assets/payments/webpay.svg'
import mercadoPagoLogo from '../assets/payments/mercado-pago.svg'
import paypalLogo from '../assets/payments/paypal.svg'

function CartDrawer({ isOpen, item, onClose, onIncrement, onDecrement, onRemove }) {
  const [showShippingCalc, setShowShippingCalc] = useState(false)
  const [cartRegion, setCartRegion] = useState('')
  const [cartShippingCost, setCartShippingCost] = useState(0)
  const [showInstructions, setShowInstructions] = useState(false)
  const [showDiscount, setShowDiscount] = useState(false)

  const subtotal = item ? item.price * item.quantity : 0
  const originalSubtotal = item ? item.originalPrice * item.quantity : 0
  const discount = Math.max(0, originalSubtotal - subtotal)

  const calculatedShipping = cartShippingCost > 0 ? cartShippingCost : (item?.shippingCost || 0)
  const shipping = calculatedShipping > 0 ? calculatedShipping : (item ? 3990 : 0)
  const total = subtotal + shipping

  const regions = [
    { name: 'Región Metropolitana', cost: 3990 },
    { name: 'Región de Valparaíso', cost: 4990 },
    { name: 'Región del Biobío', cost: 5990 },
    { name: 'Región de La Araucanía', cost: 6990 },
    { name: 'Región de Los Lagos', cost: 7990 },
    { name: 'Otras regiones', cost: 8990 },
  ]

  const handleCartShippingCalculation = (e) => {
    const selectedRegion = e.target.value
    setCartRegion(selectedRegion)
    const regionData = regions.find(r => r.name === selectedRegion)
    setCartShippingCost(regionData ? regionData.cost : 0)
  }

  return (
    <div className={`cart ${isOpen ? 'cart--open' : ''}`} aria-hidden={!isOpen}>
      <button className="cart__overlay" aria-label="Cerrar carrito" onClick={onClose} />

      <aside className="cart__panel" aria-label="Carrito de compras">
        <div className="cart__header">
          <div className="cart__title-row">
            <h2 className="cart__title">Carrito</h2>
            <span className="cart__count">{item ? item.quantity : 0}</span>
          </div>
          <button className="cart__close" aria-label="Cerrar carrito" onClick={onClose}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {item && (
          <div className="cart__item">
            <img className="cart__item-image" src={item.image} alt={item.name} />

            <div className="cart__item-info">
              <div className="cart__item-main">
                <h3 className="cart__item-name">{item.name}</h3>
                <span className="cart__item-total">{formatPrice(subtotal)}</span>
              </div>

              <div className="cart__item-price-row">
                <span className="cart__item-price">{formatPrice(item.price)}</span>
                {item.originalPrice > item.price && (
                  <span className="cart__item-original">{formatPrice(item.originalPrice)}</span>
                )}
              </div>

              <div className="cart__item-actions">
                <div className="cart__quantity">
                  <button className="cart__quantity-btn" aria-label="Disminuir cantidad" onClick={onDecrement}>−</button>
                  <span className="cart__quantity-value">{item.quantity}</span>
                  <button className="cart__quantity-btn" aria-label="Aumentar cantidad" onClick={onIncrement}>+</button>
                </div>

                <button className="cart__remove" aria-label="Eliminar producto" onClick={onRemove}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18" />
                    <path d="M8 6V4h8v2" />
                    <path d="M19 6l-1 14H6L5 6" />
                    <path d="M10 11v5" />
                    <path d="M14 11v5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="cart__footer">
          <button className="cart__row" type="button" onClick={() => setShowInstructions(!showInstructions)}>
            <span>Instrucciones especiales</span>
            <span className="cart__row-toggle">{showInstructions ? '−' : '+'}</span>
          </button>
          {showInstructions && (
            <div className="cart__accordion-panel">
              <textarea
                className="cart__accordion-textarea cart__accordion-input"
                placeholder="Ej: dejar en conserjería, timbrar 2 veces..."
                maxLength="500"
              />
            </div>
          )}

          <button className="cart__row" type="button" onClick={() => setShowDiscount(!showDiscount)}>
            <span>Descuento</span>
            <span className="cart__row-toggle">{showDiscount ? '−' : '+'}</span>
          </button>
          {showDiscount && (
            <div className="cart__accordion-panel">
              <div className="cart__accordion-row">
                <input type="text" className="cart__accordion-input" placeholder="Código de descuento" />
                <button className="cart__accordion-btn" type="button">Aplicar</button>
              </div>
            </div>
          )}

          <div className="cart__summary">
            <div className="cart__summary-row">
              <span>Subtotal productos</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            {discount > 0 && (
              <div className="cart__summary-row cart__summary-row--saving">
                <span>Descuento aplicado</span>
                <strong>-{formatPrice(discount)}</strong>
              </div>
            )}
            <div className="cart__summary-row">
              <span>Envío</span>
              <strong>{formatPrice(shipping)}</strong>
            </div>
          </div>

          {!showShippingCalc && (
            <button
              className="cart__shipping-calc-btn"
              type="button"
              onClick={() => setShowShippingCalc(true)}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" />
                <path d="M16 8l4 0l0 8l-4 0" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              Calcular costo de envío
            </button>
          )}

          {showShippingCalc && (
            <div className="cart__shipping-calc">
              <select
                className="cart__shipping-calc-select"
                value={cartRegion}
                onChange={handleCartShippingCalculation}
              >
                <option value="">Selecciona tu región</option>
                {regions.map((reg, index) => (
                  <option key={index} value={reg.name}>{reg.name}</option>
                ))}
              </select>
              {cartShippingCost > 0 && (
                <div className="cart__shipping-calc-result">
                  <span>Envío a {cartRegion}:</span>
                  <strong>{formatPrice(cartShippingCost)}</strong>
                </div>
              )}
              <button
                className="cart__shipping-calc-close"
                type="button"
                onClick={() => setShowShippingCalc(false)}
              >
                Confirmar
              </button>
            </div>
          )}

          <div className="cart__total-row">
            <span>Total estimado</span>
            <strong>{formatPrice(total)} CLP</strong>
          </div>

          <p className="cart__note">
            Aranceles e impuestos incluidos. Los gastos de envío se calculan en la página de pago.
          </p>

          <button className="cart__checkout" type="button">Pagar</button>

          <div className="cart__payments">
            <div className="cart__payments-row">
              <img className="cart__payment-icon cart__payment-icon--visa" src={visaLogo} alt="Visa" />
              <img className="cart__payment-icon cart__payment-icon--mastercard" src={mastercardLogo} alt="Mastercard" />
              <img className="cart__payment-icon cart__payment-icon--webpay" src={webpayLogo} alt="Webpay Plus" />
              <img className="cart__payment-icon cart__payment-icon--mercado" src={mercadoPagoLogo} alt="Mercado Pago" />
              <img className="cart__payment-icon cart__payment-icon--paypal" src={paypalLogo} alt="PayPal" />
            </div>
            <div className="cart__payments-seal">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <span>Pago 100% encriptado y seguro</span>
            </div>
            <div className="cart__trust-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>Sitio Seguro · SAG Chile</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default CartDrawer
