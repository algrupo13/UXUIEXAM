import { useState } from 'react'
import './FloatingHelp.css'

function FloatingHelp() {
  const [isOpen, setIsOpen] = useState(false)
  const [showChat, setShowChat] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
    if (showChat) setShowChat(false)
  }

  const openChat = () => {
    setShowChat(true)
    setIsOpen(false)
  }

  return (
    <>
      <button
        className={`floating-help__fab ${isOpen ? 'floating-help__fab--active' : ''}`}
        onClick={toggle}
        aria-label="Soporte y ayuda"
      >
        {isOpen || showChat ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="floating-help__menu">
          <div className="floating-help__menu-header">
            <h3 className="floating-help__menu-title">¡Hola!</h3>
            <p className="floating-help__menu-subtitle">¿Cómo podemos ayudarte hoy?</p>
          </div>
          <div className="floating-help__menu-content">
          <a
            href="https://wa.me/56912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-help__menu-item floating-help__menu-item--whatsapp"
          >
            <span className="floating-help__menu-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            <div className="floating-help__menu-info">
              <strong>WhatsApp</strong>
              <span>Escríbenos al +56 9 1234 5678</span>
            </div>
          </a>
          <a
            href="mailto:hola@adikari.cl"
            className="floating-help__menu-item"
          >
            <span className="floating-help__menu-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            <div className="floating-help__menu-info">
              <strong>Correo</strong>
              <span>hola@adikari.cl</span>
            </div>
          </a>
          <a
            href="tel:+56212345678"
            className="floating-help__menu-item"
          >
            <span className="floating-help__menu-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </span>
            <div className="floating-help__menu-info">
              <strong>Teléfono</strong>
              <span>+56 2 1234 5678</span>
            </div>
          </a>
          <button
            className="floating-help__menu-item floating-help__menu-item--chat"
            onClick={openChat}
          >
            <span className="floating-help__menu-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 00-7.07 17.07l-2.93 2.93a1 1 0 001.41 1.41l2.93-2.93A10 10 0 1012 2z" />
                <path d="M8 10h8M8 14h5" />
              </svg>
            </span>
            <div className="floating-help__menu-info">
              <strong>Chat en vivo</strong>
              <span>Atención 24/7 con IA</span>
            </div>
          </button>
          </div>
        </div>
      )}

      {showChat && (
        <div className="floating-help__chat">
          <div className="floating-help__chat-header">
            <div className="floating-help__chat-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              <span>Soporte Adikari</span>
            </div>
            <button className="floating-help__chat-close" onClick={() => setShowChat(false)} aria-label="Cerrar chat">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="floating-help__chat-body">
            <div className="floating-help__chat-message floating-help__chat-message--bot">
              <p>¡Hola! Soy tu asistente virtual de Adikari. ¿En qué puedo ayudarte hoy?</p>
              <span className="floating-help__chat-time">Ahora</span>
            </div>
            <div className="floating-help__chat-message floating-help__chat-message--bot">
              <p>Puedo ayudarte con:</p>
              <ul>
                <li>Estado de tu pedido</li>
                <li>Costos de envío</li>
                <li>Información de productos</li>
                <li>Devoluciones y cambios</li>
              </ul>
              <span className="floating-help__chat-time">Ahora</span>
            </div>
          </div>
          <div className="floating-help__chat-footer">
            <input
              type="text"
              className="floating-help__chat-input"
              placeholder="Escribe tu mensaje..."
              disabled
            />
            <button className="floating-help__chat-send" aria-label="Enviar mensaje">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default FloatingHelp
