import './CategoryPage.css'
import { useState, useMemo } from 'react'
import ProductCard from './ProductCard'

function CategoryPage({ title, description, products, productCount, onAddToCart, onProductDoubleClick }) {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [availability, setAvailability] = useState({ inStock: false, outOfStock: false })
  const [priceRanges, setPriceRanges] = useState({
    under5k: false,
    '5to7k': false,
    '7to10k': false,
    over10k: false,
  })
  const [origins, setOrigins] = useState({
    Chile: false,
    México: false,
    Perú: false,
    Argentina: false,
  })
  const [sortBy, setSortBy] = useState('default')

  const toggleAvailability = (key) => {
    setAvailability(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const togglePrice = (key) => {
    setPriceRanges(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const toggleOrigin = (key) => {
    setOrigins(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const clearFilters = () => {
    setAvailability({ inStock: false, outOfStock: false })
    setPriceRanges({ under5k: false, '5to7k': false, '7to10k': false, over10k: false })
    setOrigins({ Chile: false, México: false, Perú: false, Argentina: false })
    setSortBy('default')
  }

  const hasActiveFilters = availability.inStock || availability.outOfStock ||
    priceRanges.under5k || priceRanges['5to7k'] || priceRanges['7to10k'] || priceRanges.over10k ||
    origins.Chile || origins.México || origins.Perú || origins.Argentina ||
    sortBy !== 'default'

  const filteredProducts = useMemo(() => {
    let result = [...products]

    const anyAvail = availability.inStock || availability.outOfStock
    if (anyAvail) {
      result = result.filter(p => {
        if (availability.inStock && !availability.outOfStock) return p.inStock
        if (!availability.inStock && availability.outOfStock) return !p.inStock
        return true
      })
    }

    const anyPrice = priceRanges.under5k || priceRanges['5to7k'] || priceRanges['7to10k'] || priceRanges.over10k
    if (anyPrice) {
      result = result.filter(p => {
        const pr = p.price
        let match = false
        if (priceRanges.under5k && pr < 5000) match = true
        if (priceRanges['5to7k'] && pr >= 5000 && pr <= 7000) match = true
        if (priceRanges['7to10k'] && pr > 7000 && pr <= 10000) match = true
        if (priceRanges.over10k && pr > 10000) match = true
        return match
      })
    }

    const anyOrigin = origins.Chile || origins.México || origins.Perú || origins.Argentina
    if (anyOrigin) {
      result = result.filter(p => origins[p.origin])
    }

    switch (sortBy) {
      case 'priceAsc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'priceDesc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'nameAsc':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'reviewsDesc':
        result.sort((a, b) => b.reviews - a.reviews)
        break
      default:
        break
    }

    return result
  }, [products, availability, priceRanges, sortBy])

  const activeCount = filteredProducts.length

  const FiltersContent = () => (
    <>
      <div className="category-page__filter-group">
        <h3 className="category-page__filter-title">Disponibilidad</h3>
        <label className="category-page__filter-option">
          <input
            type="checkbox"
            checked={availability.inStock}
            onChange={() => toggleAvailability('inStock')}
          />
          <span>En stock</span>
        </label>
        <label className="category-page__filter-option">
          <input
            type="checkbox"
            checked={availability.outOfStock}
            onChange={() => toggleAvailability('outOfStock')}
          />
          <span>Agotado</span>
        </label>
      </div>

      <div className="category-page__filter-group">
        <h3 className="category-page__filter-title">Precio</h3>
        <label className="category-page__filter-option">
          <input type="checkbox" checked={priceRanges.under5k} onChange={() => togglePrice('under5k')} />
          <span>Menos de $5.000</span>
        </label>
        <label className="category-page__filter-option">
          <input type="checkbox" checked={priceRanges['5to7k']} onChange={() => togglePrice('5to7k')} />
          <span>$5.000 - $7.000</span>
        </label>
        <label className="category-page__filter-option">
          <input type="checkbox" checked={priceRanges['7to10k']} onChange={() => togglePrice('7to10k')} />
          <span>$7.000 - $10.000</span>
        </label>
        <label className="category-page__filter-option">
          <input type="checkbox" checked={priceRanges.over10k} onChange={() => togglePrice('over10k')} />
          <span>Más de $10.000</span>
        </label>
      </div>

      <div className="category-page__filter-group">
        <h3 className="category-page__filter-title">Procedencia</h3>
        <label className="category-page__filter-option">
          <input type="checkbox" checked={origins.Chile} onChange={() => toggleOrigin('Chile')} />
          <span>Chile</span>
        </label>
        <label className="category-page__filter-option">
          <input type="checkbox" checked={origins.México} onChange={() => toggleOrigin('México')} />
          <span>México</span>
        </label>
        <label className="category-page__filter-option">
          <input type="checkbox" checked={origins.Perú} onChange={() => toggleOrigin('Perú')} />
          <span>Perú</span>
        </label>
        <label className="category-page__filter-option">
          <input type="checkbox" checked={origins.Argentina} onChange={() => toggleOrigin('Argentina')} />
          <span>Argentina</span>
        </label>
      </div>

      {hasActiveFilters && (
        <button className="category-page__filter-clear" type="button" onClick={clearFilters}>
          Limpiar filtros
        </button>
      )}
    </>
  )

  return (
    <section className="category-page">
      <div className="category-page__header">
        <h1 className="category-page__title">{title}</h1>
        <p className="category-page__description">{description}</p>
      </div>

      <div className="category-page__layout">
        <aside className="category-page__sidebar">
          <div className="category-page__sidebar-desktop">
            <h2 className="category-page__sidebar-heading">Filtrar</h2>
            <FiltersContent />
          </div>
        </aside>

        <div className="category-page__main">
          <div className="category-page__toolbar">
            <div className="category-page__toolbar-left">
              <button
                className="category-page__filter-toggle"
                type="button"
                onClick={() => setFiltersOpen(v => !v)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
                Filtrar
                {hasActiveFilters && <span className="category-page__filter-dot" />}
              </button>
              <span className="category-page__count">{activeCount} de {productCount} artículos</span>
            </div>

            <div className="category-page__controls">
              <div className="category-page__sort-wrapper">
                <select
                  className="category-page__sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Ordenar</option>
                  <option value="priceAsc">Precio: menor a mayor</option>
                  <option value="priceDesc">Precio: mayor a menor</option>
                  <option value="nameAsc">Nombre: A - Z</option>
                  <option value="reviewsDesc">Más reseñadas</option>
                </select>
                <svg className="category-page__sort-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
              <div className="category-page__view-toggle">
                <button className="category-page__view-btn category-page__view-btn--active" type="button" aria-label="Vista grid">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </button>
                <button className="category-page__view-btn" type="button" aria-label="Vista lista">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {filtersOpen && (
            <div className="category-page__filters-mobile">
              <FiltersContent />
            </div>
          )}

          <div className="category-page__grid">
            {filteredProducts.length === 0 ? (
              <p className="category-page__empty">No se encontraron productos con los filtros seleccionados.</p>
            ) : (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onDoubleClick={onProductDoubleClick}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryPage
