import './ProductCard.css'
import { formatPrice } from '../data/products'

function ProductCard({ product, onAddToCart, onDoubleClick }) {
  const hasDiscount = product.discountPercent > 0 && product.price < product.originalPrice

  return (
    <div className="product-card" onDoubleClick={() => onDoubleClick && onDoubleClick(product)}>
      <div className="product-card__image-wrapper">
        {!product.inStock && (
          <span className="product-card__badge product-card__badge--soldout">AGOTADO</span>
        )}
        {product.badge && product.inStock && (
          <span className="product-card__badge">{product.badge}</span>
        )}
        <img
          className="product-card__image"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
        <button
          className="product-card__add"
          type="button"
          onClick={() => onAddToCart(product)}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 6h15l-1.5 9h-12z" />
            <path d="M6 6L5 3H2" />
            <path d="M12 10v4" />
            <path d="M10 12h4" />
          </svg>
          Añadir
        </button>
      </div>

      <h3 className="product-card__name">{product.name}</h3>

      <div className="product-card__price-row">
        <span className="product-card__price-current">
          {formatPrice(product.price)}
        </span>
        {hasDiscount && (
          <span className="product-card__price-original">
            {formatPrice(product.originalPrice)}
          </span>
        )}
      </div>
    </div>
  )
}

export default ProductCard
