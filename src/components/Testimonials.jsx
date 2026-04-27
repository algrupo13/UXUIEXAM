import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    quote:
      'La salvia blanca de Adikari es increíble. Se nota la calidad y el cuidado en cada producto. Mi espacio se siente completamente renovado.',
    author: 'Carolina M.',
    location: 'Santiago',
  },
  {
    id: 2,
    quote:
      'Las sesiones de Reiki con Paola cambiaron mi vida. Su sensibilidad y profesionalismo te hacen sentir contenida desde el primer momento.',
    author: 'Valentina R.',
    location: 'Viña del Mar',
  },
  {
    id: 3,
    quote:
      'Las box rituales son el regalo perfecto. Cada detalle está pensado con tanto amor. Mis amigas quedaron encantadas.',
    author: 'Francisca L.',
    location: 'Concepción',
  },
]

function StarIcon() {
  return (
    <svg className="testimonials__star" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__wrapper">
        <span className="testimonials__badge">Experiencias</span>

        <h2 className="testimonials__title">
          Lo que dicen nuestras <em className="testimonials__title-accent">clientas</em>
        </h2>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <div className="testimonials__card" key={t.id}>
              <div className="testimonials__stars">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <p className="testimonials__quote">{t.quote}</p>
              <span className="testimonials__author">
                — {t.author}, {t.location}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
