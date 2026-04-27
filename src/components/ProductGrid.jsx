import './ProductGrid.css'
import ProductCard from './ProductCard'
import { mostWanted } from '../data/products'

function ProductGrid({ onAddToCart, onProductDoubleClick }) {
  return (
    <section className="product-grid">
      <div className="product-grid__header">
        <div>
          <span className="product-grid__label">Favoritos</span>
          <div className="product-grid__title-group">
            <h2 className="product-grid__title">
              Lo más <em className="product-grid__title-accent">buscado</em>
            </h2>
          </div>
        </div>
        <a href="#" className="product-grid__link">
          Ver<br />todo
        </a>
      </div>

      <div className="product-grid__grid">
        {mostWanted.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
            onDoubleClick={onProductDoubleClick}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductGrid
