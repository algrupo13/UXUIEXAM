import './Navbar.css'
import { useState } from 'react'

function Navbar({ cartCount, onCartOpen, onNavigate }) {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleNavigate = (page) => {
    setMegaMenuOpen(false)
    setIsMobileMenuOpen(false)
    setIsSearchOpen(false)
    if (onNavigate) onNavigate(page)
  }

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  return (
    <header className="navbar">
      <button 
        className={`navbar__menu-btn ${isMobileMenuOpen ? 'navbar__menu-btn--open' : ''}`} 
        aria-label="Menú"
        onClick={toggleMobileMenu}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {isMobileMenuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>

      <div className="navbar__brand" onClick={() => handleNavigate('home')}>
        <img
          className="navbar__logo-img"
          src="/src/img/logo/nano-banana-2026-02-24T15-44-53.avif"
          alt="ADIKARI"
        />
      </div>

      <nav className="navbar__nav">
        <button className="navbar__link" type="button" onClick={() => handleNavigate('home')}>Inicio</button>
        <div
          className={`navbar__dropdown-wrapper${megaMenuOpen ? ' navbar__dropdown-wrapper--open' : ''}`}
          onMouseEnter={() => setMegaMenuOpen(true)}
          onMouseLeave={() => setMegaMenuOpen(false)}
        >
          <button className="navbar__link" type="button">Tienda</button>
          <div className="navbar__mega-menu">
            <div className="navbar__mega-menu-inner">
              <div className="navbar__mega-categories">
                <div className="navbar__mega-column">
                  <button type="button" className="navbar__mega-category" onClick={() => handleNavigate('bombitas')}>Bombitas Defumación</button>
                  <button type="button" className="navbar__mega-item" onClick={() => handleNavigate('bombitas')}>Completas</button>
                  <button type="button" className="navbar__mega-item" onClick={() => handleNavigate('bombitas')}>Herbals</button>
                  <button type="button" className="navbar__mega-item" onClick={() => handleNavigate('bombitas')}>7 Chakras</button>
                  <button type="button" className="navbar__mega-item" onClick={() => handleNavigate('bombitas')}>Esferas Mágicas</button>
                </div>
                <div className="navbar__mega-column">
                  <button type="button" className="navbar__mega-category" onClick={() => handleNavigate('home')}>Box Rituales</button>
                  <button type="button" className="navbar__mega-item" onClick={() => handleNavigate('home')}>Box Adikari</button>
                  <button type="button" className="navbar__mega-item" onClick={() => handleNavigate('home')}>Kit Humito Sagrado</button>
                </div>
                <div className="navbar__mega-column">
                  <button type="button" className="navbar__mega-category" onClick={() => handleNavigate('home')}>Linea México</button>
                  <button type="button" className="navbar__mega-item" onClick={() => handleNavigate('home')}>Salvia Blanca</button>
                  <button type="button" className="navbar__mega-item" onClick={() => handleNavigate('home')}>Copal</button>
                  <button type="button" className="navbar__mega-item" onClick={() => handleNavigate('home')}>Briquetas</button>
                </div>
                <div className="navbar__mega-column">
                  <button type="button" className="navbar__mega-category" onClick={() => handleNavigate('home')}>Sahumerios</button>
                  <button type="button" className="navbar__mega-item" onClick={() => handleNavigate('home')}>Abundancia & Atracción</button>
                  <button type="button" className="navbar__mega-item" onClick={() => handleNavigate('home')}>Armonizar & Relajar</button>
                  <button type="button" className="navbar__mega-item" onClick={() => handleNavigate('home')}>Limpieza Profunda</button>
                  <button type="button" className="navbar__mega-item" onClick={() => handleNavigate('home')}>Conexión Espiritual</button>
                </div>
                <div className="navbar__mega-column">
                  <button type="button" className="navbar__mega-category" onClick={() => handleNavigate('home')}>Oráculos & Tarot</button>
                  <button type="button" className="navbar__mega-item" onClick={() => handleNavigate('home')}>Oráculos</button>
                  <button type="button" className="navbar__mega-item" onClick={() => handleNavigate('home')}>Tarot</button>
                </div>
                <div className="navbar__mega-column">
                  <button type="button" className="navbar__mega-category" onClick={() => handleNavigate('home')}>Velas de Miel</button>
                  <button type="button" className="navbar__mega-category navbar__mega-category--sub" onClick={() => handleNavigate('home')}>Accesorios</button>
                </div>
              </div>
              <div className="navbar__mega-products">
                <button type="button" className="navbar__mega-product" onClick={() => handleNavigate('home')}>
                  <img
                    className="navbar__mega-product-img"
                    src="/src/img/nav/aire.webp"
                    alt="5 Elementos - Aire (Alegría)"
                  />
                  <span className="navbar__mega-product-name">5 Elementos - Aire (Alegría)</span>
                  <span className="navbar__mega-product-price">$6.990</span>
                </button>
                <button type="button" className="navbar__mega-product" onClick={() => handleNavigate('home')}>
                  <img
                    className="navbar__mega-product-img"
                    src="/src/img/nav/tierra.webp"
                    alt="5 Elementos - Tierra (Armonía)"
                  />
                  <span className="navbar__mega-product-name">5 Elementos - Tierra (Armonía)</span>
                  <span className="navbar__mega-product-price">$6.990</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="navbar__link" type="button" onClick={() => handleNavigate('about')}>Sobre Nosotros</button>
        <button className="navbar__link" type="button" onClick={() => handleNavigate('home')}>Ofertas</button>
        <button className="navbar__link" type="button" onClick={() => handleNavigate('home')}>Contacto / Mayoristas</button>
      </nav>

      <div className="navbar__icons">
        <button 
          className="navbar__icon-btn navbar__icon-btn--search" 
          aria-label="Buscar"
          onClick={toggleSearch}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
        </button>
        <button className="navbar__icon-btn navbar__icon-btn--account" aria-label="Mi cuenta">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </button>
        <button className="navbar__icon-btn" aria-label="Carrito" onClick={onCartOpen}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 6h15l-1.5 9h-12z"/>
            <circle cx="9" cy="20" r="1.5"/>
            <circle cx="18" cy="20" r="1.5"/>
            <path d="M6 6L5 3H2"/>
          </svg>
          <span className="navbar__cart-badge">{cartCount}</span>
        </button>
      </div>

      {/* Search Overlay */}
      <div className={`search-overlay ${isSearchOpen ? 'search-overlay--open' : ''}`}>
        <div className="search-overlay__container">
          <div className="search-overlay__header">
            <div className="search-overlay__input-wrapper">
              <svg className="search-overlay__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              <input 
                type="text" 
                className="search-overlay__input" 
                placeholder="¿Qué estás buscando hoy?" 
                autoFocus={isSearchOpen}
              />
            </div>
            <button className="search-overlay__close" onClick={toggleSearch}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="search-overlay__content">
            <div className="search-overlay__suggestions">
              <h3 className="search-overlay__subtitle">Búsquedas Populares</h3>
              <div className="search-overlay__tags">
                <button className="search-overlay__tag" onClick={() => handleNavigate('bombitas')}>Bombitas</button>
                <button className="search-overlay__tag" onClick={() => handleNavigate('home')}>Sahumerios</button>
                <button className="search-overlay__tag" onClick={() => handleNavigate('home')}>Velas de Miel</button>
                <button className="search-overlay__tag" onClick={() => handleNavigate('home')}>Salvia Blanca</button>
                <button className="search-overlay__tag" onClick={() => handleNavigate('home')}>Kit de Limpieza</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`navbar__mobile-overlay ${isMobileMenuOpen ? 'navbar__mobile-overlay--open' : ''}`} onClick={toggleMobileMenu} />
      <div className={`navbar__mobile-drawer ${isMobileMenuOpen ? 'navbar__mobile-drawer--open' : ''}`}>
        <div className="navbar__mobile-header">
          <img className="navbar__logo-img" src="/src/img/logo/nano-banana-2026-02-24T15-44-53.avif" alt="ADIKARI" />
          <button className="navbar__mobile-close" onClick={toggleMobileMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="navbar__mobile-links">
          <button className="navbar__mobile-link" onClick={() => handleNavigate('home')}>Inicio</button>
          <button className="navbar__mobile-link" onClick={() => handleNavigate('home')}>Tienda</button>
          <button className="navbar__mobile-link" onClick={() => handleNavigate('about')}>Sobre Nosotros</button>
          <button className="navbar__mobile-link" onClick={() => handleNavigate('home')}>Ofertas</button>
          <button className="navbar__mobile-link" onClick={() => handleNavigate('home')}>Contacto / Mayoristas</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
