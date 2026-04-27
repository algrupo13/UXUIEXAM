import './Newsletter.css'

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter__wrapper">
        <h2 className="newsletter__title">
          Recibe <em className="newsletter__title-accent">rituales</em> y ofertas
        </h2>

        <p className="newsletter__subtitle">
          Guías de sanación, descuentos exclusivos y novedades antes que nadie.
        </p>

        <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
          <input
            className="newsletter__input"
            type="email"
            placeholder="Tu correo electrónico"
            aria-label="Tu correo electrónico"
          />
          <button className="newsletter__button" type="submit">
            Suscribir
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
