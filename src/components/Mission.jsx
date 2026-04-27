import './Mission.css'

const values = [
  {
    title: 'Sustentable',
    description: 'Producción respetuosa con el medioambiente',
    icon: (
      <svg className="mission__card-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4C16 4 6 12 6 20C6 24.418 10.582 28 16 28C21.418 28 26 24.418 26 20C26 12 16 4 16 4Z" />
        <path d="M16 12V20" />
        <path d="M16 20L13 17" />
      </svg>
    ),
  },
  {
    title: 'Comercio Justo',
    description: 'Artesanías de México, Perú y Argentina',
    icon: (
      <svg className="mission__card-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="12" r="5" />
        <path d="M8 28V24C8 20.686 10.686 18 14 18H18C21.314 18 24 20.686 24 24V28" />
        <path d="M4 16L6 14L8 16" />
        <path d="M24 16L26 14L28 16" />
      </svg>
    ),
  },
  {
    title: 'Libre de Tóxicos',
    description: 'Seguros para ti y tu familia',
    icon: (
      <svg className="mission__card-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4C16 4 8 10 8 18C8 23.523 11.582 28 16 28C20.418 28 24 23.523 24 18C24 10 16 4 16 4Z" />
        <path d="M16 12V18" />
        <path d="M13 22C13 22 15 24 16 24C17 24 19 22 19 22" />
        <path d="M12 10L14 8" />
        <path d="M20 10L18 8" />
      </svg>
    ),
  },
  {
    title: 'Impacto Social',
    description: 'Fundaciones oncológicas',
    icon: (
      <svg className="mission__card-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4L19 11H27L21 16L23 24L16 20L9 24L11 16L5 11H13L16 4Z" />
      </svg>
    ),
  },
]

function Mission() {
  return (
    <section className="mission">
      <div className="mission__wrapper">
        <span className="mission__badge">Nuestra Misión</span>

        <h2 className="mission__title">
          Mejorar tu <em className="mission__title-accent">calidad de vida</em>
        </h2>

        <div className="mission__grid">
          {values.map((value) => (
            <div className="mission__card" key={value.title}>
              {value.icon}
              <h3 className="mission__card-title">{value.title}</h3>
              <p className="mission__card-desc">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mission
