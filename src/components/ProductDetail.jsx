import './ProductDetail.css'
import { useState } from 'react'
import { formatPrice } from '../data/products'

function ProductDetail({ product, onClose, onAddToCart }) {
  if (!product) {
    return null
  }

  const [selectedOption, setSelectedOption] = useState(1)
  const [region, setRegion] = useState('')
  const [shippingCost, setShippingCost] = useState(0)
  const [activeTab, setActiveTab] = useState('descripcion')
  const [isShippingModalOpen, setIsShippingModalOpen] = useState(false)

  const tabs = [
    { id: 'descripcion', label: 'Descripción' },
    { id: 'beneficios', label: 'Beneficios' },
    { id: 'uso', label: 'Modo de uso' },
  ]

  const productData = {
    id: product.id,
    name: product.name,
    description: product.description,
    fullDescription: 'El Sahumerio de Copal Mexicano es una resina sagrada utilizada desde tiempos ancestrales para limpiar, purificar y elevar la energía de los espacios. Su humo blanco, aromático y envolvente es ideal para rituales, meditaciones y limpiezas energéticas profundas, ayudando a crear un ambiente de calma, protección y armonía. Estas varitas son elaboradas artesanalmente en México, respetando procesos tradicionales de recolección sustentable realizados por comunidades copaleras, por lo que cada pieza es única y su tamaño y grosor pueden variar naturalmente.',
    energyBenefits: [
      'Limpiar energías densas',
      'Purificar espacios y objetos',
      'Elevar la vibración',
      'Generar protección espiritual',
    ],
    aromaNote: 'Su aroma cálido y profundo favorece la conexión con lo sagrado.',
    energeticBenefits: [
      'Limpieza energética profunda',
      'Protección del entorno',
      'Elevación de la vibración',
      'Ideal para rituales y meditaciones',
      'Favorece la conexión espiritual',
    ],
    images: [
      '/img/products/copal-mexicano-granulado-10/1-scaled-jpg.webp',
      '/img/products/copal-mexicano-granulado-10/002-13-scaled-jpg.webp',
      '/img/products/copal-mexicano-granulado-10/Copilot_20260421_160259.webp',
      '/img/products/copal-mexicano-granulado-10/Copilot_20260424_143108.webp',
    ],
    usageInstructions: [
      'Enciende la punta de la varita con una llama constante',
      'Deja que arda unos segundos y luego sopla suavemente',
      'Coloca en un porta sahumerio resistente al calor',
      'Permite que el humo purifique el espacio',
    ],
    idealUses: [
      'Limpiezas energéticas',
      'Rituales',
      'Meditaciones',
      'Ceremonias',
    ],
    recommendations: [
      'Usar en espacios ventilados',
      'No dejar encendido sin supervisión',
      'Mantener fuera del alcance de niños y mascotas',
    ],
    options: [
      { id: 1, name: 'Compra 1 Caja', description: 'Para probar', price: product.price, quantity: 1 },
      { id: 2, name: 'Compra 2 cajas', description: 'Más elegido + ahorra 10%', originalPrice: product.price * 2, price: product.price * 2 * 0.9, quantity: 2, bestSeller: true },
      { id: 3, name: 'Compra 3 cajas', description: 'Mejor precio + ahorra 15%', originalPrice: product.price * 3, price: product.price * 3 * 0.85, quantity: 3 },
    ],
  }

  const regions = [
    { name: 'Región Metropolitana', cost: 3990 },
    { name: 'Región de Valparaíso', cost: 4990 },
    { name: 'Región del Biobío', cost: 5990 },
    { name: 'Región de La Araucanía', cost: 6990 },
    { name: 'Región de Los Lagos', cost: 7990 },
    { name: 'Otras regiones', cost: 8990 },
  ]

  const handleShippingCalculation = (e) => {
    const selectedRegion = e.target.value
    setRegion(selectedRegion)
    const regionData = regions.find(r => r.name === selectedRegion)
    setShippingCost(regionData ? regionData.cost : 0)
  }

  const handleAddToCart = () => {
    const selectedProductOption = productData.options.find(opt => opt.id === selectedOption)
    onAddToCart({
      ...product,
      price: selectedProductOption.price,
      originalPrice: selectedProductOption.originalPrice || selectedProductOption.price,
      quantity: selectedProductOption.quantity,
      shippingCost,
    })
    onClose()
  }

  const selectedOptionData = productData.options.find(opt => opt.id === selectedOption)
  const totalPrice = selectedOptionData ? selectedOptionData.price : product.price

  return (
    <div className="product-detail" aria-hidden={!product}>
      <button className="product-detail__overlay" aria-label="Cerrar detalle" onClick={onClose} />

      <div className="product-detail__panel">
        <button className="product-detail__close" aria-label="Cerrar" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="product-detail__content">
          <div className="product-detail__images">
            <img
              className="product-detail__main-image"
              src={productData.images[0]}
              alt={productData.name}
            />
            <div className="product-detail__thumbnails">
              {productData.images.slice(1).map((img, index) => (
                <img
                  key={index}
                  className="product-detail__thumbnail"
                  src={img}
                  alt={`${productData.name} ${index + 2}`}
                />
              ))}
            </div>
          </div>

          <div className="product-detail__right">
            <div className="product-detail__header">
              <h1 className="product-detail__name">{productData.name}</h1>
              <div className="product-detail__price-row">
                <span className="product-detail__price">{formatPrice(totalPrice)}</span>
                {selectedOptionData?.originalPrice && (
                  <span className="product-detail__price-original">{formatPrice(selectedOptionData.originalPrice)}</span>
                )}
              </div>
            </div>

            <div className="product-detail__tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`product-detail__tab ${activeTab === tab.id ? 'product-detail__tab--active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="product-detail__tab-content">
              {activeTab === 'descripcion' && (
                <div className="product-detail__tab-pane">
                  <p className="product-detail__description">{productData.fullDescription}</p>
                  <div className="product-detail__subsection">
                    <h3 className="product-detail__subsection-title">Energía del copal</h3>
                    <ul className="product-detail__list">
                      {productData.energyBenefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                    <p className="product-detail__aroma">{productData.aromaNote}</p>
                  </div>
                </div>
              )}

              {activeTab === 'beneficios' && (
                <div className="product-detail__tab-pane">
                  <h3 className="product-detail__subsection-title">Beneficios energéticos</h3>
                  <ul className="product-detail__list">
                    {productData.energeticBenefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'uso' && (
                <div className="product-detail__tab-pane">
                  <h3 className="product-detail__subsection-title">Modo de uso</h3>
                  <ol className="product-detail__instructions">
                    {productData.usageInstructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                  <div className="product-detail__uses">
                    <span className="product-detail__uses-label">Ideal para:</span>
                    <div className="product-detail__uses-tags">
                      {productData.idealUses.map((use, index) => (
                        <span key={index} className="product-detail__tag">{use}</span>
                      ))}
                    </div>
                  </div>
                  <div className="product-detail__subsection">
                    <h3 className="product-detail__subsection-title">Recomendaciones</h3>
                    <ul className="product-detail__recommendations">
                      {productData.recommendations.map((rec, index) => (
                        <li key={index}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

            </div>

            <div className="product-detail__purchase">
              <div className="product-detail__options-header">
                <span className="product-detail__options-sparkle">&#10024;</span>
                <span className="product-detail__options-title">Mientras Más Limpias, Más Ahorras</span>
                <span className="product-detail__options-sparkle">&#10024;</span>
              </div>
              <div className="product-detail__options">
                {productData.options.map((option) => (
                  <button
                    key={option.id}
                    className={`product-detail__option ${selectedOption === option.id ? 'product-detail__option--selected' : ''} ${option.bestSeller ? 'product-detail__option--bestseller' : ''}`}
                    onClick={() => setSelectedOption(option.id)}
                  >
                    <span className={`product-detail__radio ${selectedOption === option.id ? 'product-detail__radio--selected' : ''}`} />
                    {option.bestSeller && <span className="product-detail__bestseller-badge">Best Seller &#128293;</span>}
                    <span className="product-detail__option-name">{option.name}</span>
                    <span className="product-detail__option-description">{option.description}</span>
                    <span className="product-detail__option-price">{formatPrice(option.price)}</span>
                    {option.originalPrice && (
                      <span className="product-detail__option-original">{formatPrice(option.originalPrice)}</span>
                    )}
                  </button>
                ))}
              </div>

              <div className="product-detail__shipping-bar">
                {shippingCost > 0 ? (
                  <div className="product-detail__shipping-info">
                    <span className="product-detail__shipping-label">Envío a {region}:</span>
                    <span className="product-detail__shipping-value">{formatPrice(shippingCost)}</span>
                  </div>
                ) : (
                  <span className="product-detail__shipping-hint">Envío no calculado</span>
                )}
                <button
                  className="product-detail__shipping-btn"
                  type="button"
                  onClick={() => setIsShippingModalOpen(true)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" />
                    <path d="M16 8l4 0l0 8l-4 0" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                  Calcular envío
                </button>
              </div>

              <div className="product-detail__buttons">
                <button
                  className="product-detail__add-to-cart"
                  onClick={handleAddToCart}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 6h15l-1.5 9h-12z" />
                    <path d="M6 6L5 3H2" />
                    <circle cx="9" cy="20" r="1" />
                    <circle cx="18" cy="20" r="1" />
                  </svg>
                  Agregar al carrito
                </button>
                <button
                  className="product-detail__buy-now"
                  onClick={() => { handleAddToCart(); }}
                >
                  Comprar ahora
                </button>
              </div>

              <div className="product-detail__secure-payment">
                <span className="product-detail__secure-text">Paga de forma segura con:</span>
                <div className="product-detail__secure-badges">
                  <span className="product-detail__secure-badge product-detail__secure-badge--visa" aria-label="Visa">V</span>
                  <span className="product-detail__secure-badge product-detail__secure-badge--mastercard" aria-label="Mastercard">M</span>
                  <span className="product-detail__secure-badge product-detail__secure-badge--webpay" aria-label="Webpay">W</span>
                  <span className="product-detail__secure-badge product-detail__secure-badge--mercado" aria-label="Mercado Pago">MP</span>
                  <span className="product-detail__secure-badge product-detail__secure-badge--paypal" aria-label="PayPal">P</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShippingModalOpen && (
        <div className="shipping-modal">
          <button className="shipping-modal__overlay" onClick={() => setIsShippingModalOpen(false)} />
          <div className="shipping-modal__panel">
            <div className="shipping-modal__header">
              <h3 className="shipping-modal__title">Calculadora de envío</h3>
              <button className="shipping-modal__close" onClick={() => setIsShippingModalOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="shipping-modal__body">
              <p className="shipping-modal__text">Selecciona tu región para calcular el costo de envío:</p>
              <select
                className="shipping-modal__select"
                value={region}
                onChange={handleShippingCalculation}
              >
                <option value="">Selecciona tu región</option>
                {regions.map((reg, index) => (
                  <option key={index} value={reg.name}>{reg.name}</option>
                ))}
              </select>
              {shippingCost > 0 && (
                <div className="shipping-modal__result">
                  <span>Costo estimado de envío:</span>
                  <strong>{formatPrice(shippingCost)}</strong>
                </div>
              )}
            </div>
            <div className="shipping-modal__footer">
              <button
                className="shipping-modal__confirm"
                onClick={() => setIsShippingModalOpen(false)}
                disabled={!region}
              >
                Confirmar envío
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail
