import './Categories.css'

const categories = [
  {
    title: 'Sahumerios',
    subtitle: 'Sahumos · Aromaterapia · Salvia Blanca',
    image: '/img/ritual/OfertaGancho3.webp',
    hasIcon: true,
  },
  {
    title: 'Linea Mexico',
    subtitle: 'Brisquetas · Copal · Salvia Blanca',
    image: '/img/ritual/Carrrusel.webp',
    hasIcon: true,
  },
  {
    title: 'Oráculos & Tarot',
    subtitle: 'Tarot · Oráculos',
    image: '/img/ritual/4.webp',
    hasIcon: true,
  },
  {
    title: 'Box Rituales',
    subtitle: 'Kits Completos · Aromaterapia',
    image: '/img/ritual/box-rituales.webp',
    hasIcon: false,
  },
  {
    title: 'Accesorios',
    subtitle: 'Complementos · Ritual · Decoración',
    image: '/img/ritual/Copilot_20260421_132547.webp',
    hasIcon: false,
  },
  {
    title: 'Ofertas',
    subtitle: 'Descuentos Especiales',
    image: '/img/ritual/Carrusel3.webp',
    hasIcon: false,
  },
]

function Categories() {
  return (
    <section className="categories">
      <div className="categories__header">
        <span className="categories__badge">Explora Nuestro Universo</span>
        <h2 className="categories__title">
          Encuentra tu <em className="categories__title-accent">ritual</em>
        </h2>
      </div>

      <div className="categories__grid">
        {categories.map((cat) => (
          <div className="categories__card" key={cat.title}>
            <img
              className="categories__card-image"
              src={cat.image}
              alt={cat.title}
              loading="lazy"
            />
            <div className="categories__card-overlay" />
            {cat.hasIcon && (
              <div className="categories__card-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
            )}
            <div className="categories__card-content">
              <h3 className="categories__card-title">{cat.title}</h3>
              <span className="categories__card-subtitle">{cat.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories
