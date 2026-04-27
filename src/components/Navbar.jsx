import './Navbar.css'

function Navbar({ cartCount, onCartOpen, onNavigate }) {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <img
          className="navbar__logo-img"
          src="/src/img/logo/nano-banana-2026-02-24T15-44-53.avif"
          alt="ASIKARI"
        />
      </div>

      <nav className="navbar__nav">
        <button className="navbar__link" type="button" onClick={() => onNavigate('home')}>Inicio</button>
        <div className="navbar__dropdown-wrapper">
          <button className="navbar__link" type="button">Tienda</button>
          <div className="navbar__mega-menu">
            <div className="navbar__mega-menu-inner">
              <div className="navbar__mega-categories">
                <div className="navbar__mega-column">
                  <a href="#" className="navbar__mega-category">Bombitas Defumación</a>
                </div>
                <div className="navbar__mega-column">
                  <a href="#" className="navbar__mega-category">Box Rituales</a>
                  <a href="#" className="navbar__mega-item">Box Adikari</a>
                  <a href="#" className="navbar__mega-item">Kit Humito Sagrado</a>
                </div>
                <div className="navbar__mega-column">
                  <a href="#" className="navbar__mega-category">Linea México</a>
                  <a href="#" className="navbar__mega-item">Salvia Blanca</a>
                  <a href="#" className="navbar__mega-item">Copal</a>
                  <a href="#" className="navbar__mega-item">Briquetas</a>
                </div>
                <div className="navbar__mega-column">
                  <a href="#" className="navbar__mega-category">Sahumerios</a>
                  <a href="#" className="navbar__mega-item">Abundancia & Atracción</a>
                  <a href="#" className="navbar__mega-item">Armonizar & Relajar</a>
                  <a href="#" className="navbar__mega-item">Limpieza Profunda</a>
                  <a href="#" className="navbar__mega-item">Conexión Espiritual</a>
                </div>
                <div className="navbar__mega-column">
                  <a href="#" className="navbar__mega-category">Oráculos & Tarot</a>
                  <a href="#" className="navbar__mega-item">Oráculos</a>
                  <a href="#" className="navbar__mega-item">Tarot</a>
                </div>
                <div className="navbar__mega-column">
                  <a href="#" className="navbar__mega-category">Velas de Miel</a>
                  <a href="#" className="navbar__mega-category navbar__mega-category--sub">Accesorios</a>
                </div>
              </div>
              <div className="navbar__mega-products">
                <a href="#" className="navbar__mega-product">
                  <img
                    className="navbar__mega-product-img"
                    src="/src/img/nav/aire.webp"
                    alt="5 Elementos - Aire (Alegría)"
                  />
                  <span className="navbar__mega-product-name">5 Elementos - Aire (Alegría)</span>
                  <span className="navbar__mega-product-price">$6.990</span>
                </a>
                <a href="#" className="navbar__mega-product">
                  <img
                    className="navbar__mega-product-img"
                    src="/src/img/nav/tierra.webp"
                    alt="5 Elementos - Tierra (Armonía)"
                  />
                  <span className="navbar__mega-product-name">5 Elementos - Tierra (Armonía)</span>
                  <span className="navbar__mega-product-price">$6.990</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <button className="navbar__link" type="button" onClick={() => onNavigate('about')}>Sobre Nosotros</button>
        <button className="navbar__link" type="button" onClick={() => onNavigate('home')}>Ofertas</button>
        <button className="navbar__link" type="button" onClick={() => onNavigate('home')}>Contacto / Mayoristas</button>
      </nav>

      <div className="navbar__icons">
        <button className="navbar__icon-btn" aria-label="Buscar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
        </button>
        <button className="navbar__icon-btn" aria-label="Mi cuenta">
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
        <button className="navbar__menu-btn" aria-label="Menú">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 12h18M3 6h18M3 18h18"/>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar
