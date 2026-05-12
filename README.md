# UXUIEXAM

Sitio web desarrollado con React y Vite para una experiencia e-commerce enfocada en productos de bienestar, presentación visual de producto destacado, carrito lateral, métodos de pago y secciones promocionales.

## Tecnologías

- React
- Vite
- CSS modular por componente
- SVG locales para medios de pago
- Netlify para despliegue

## Requisitos

- Node.js 20 o superior
- npm

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

El sitio quedará disponible normalmente en:

```text
http://localhost:5173
```

## Build de producción

```bash
npm run build
```

El resultado se genera en la carpeta:

```text
dist
```

## Previsualizar build

```bash
npm run preview
```

## Deploy en Netlify

El proyecto incluye `netlify.toml` con la configuración necesaria:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
```

Para desplegar en Netlify:

1. Conectar el repositorio `algrupo13/UXUIEXAM`.
2. Verificar que el comando de build sea `npm run build`.
3. Verificar que el directorio de publicación sea `dist`.
4. Publicar el sitio.

## Estructura principal

```text
src/
  assets/
    payments/        Logos SVG de medios de pago
  components/        Componentes React y estilos CSS
  data/              Datos de productos
```

## Métodos de pago

Los logos de Visa, Mastercard, Webpay, Mercado Pago y PayPal están incluidos como SVG locales en:

```text
src/assets/payments
```

Esto permite mantener consistencia visual y evitar depender de recursos externos durante el despliegue.
