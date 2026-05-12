import './App.css'
import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedProduct from './components/FeaturedProduct'
import ProductGrid from './components/ProductGrid'
import AboutFounder from './components/AboutFounder'
import Mission from './components/Mission'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import ProductDetail from './components/ProductDetail'
import FloatingHelp from './components/FloatingHelp'
import CategoryPage from './components/CategoryPage'
import { featuredProduct, bombitasDeDefumacion } from './data/products'

function App() {
  const [cartItem, setCartItem] = useState({
    ...featuredProduct,
    quantity: 1,
  })
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [currentPage, setCurrentPage] = useState('home')
  const [pendingScrollTarget, setPendingScrollTarget] = useState(null)

  useEffect(() => {
    if (!pendingScrollTarget) return

    const target = document.getElementById(pendingScrollTarget)
    if (!target) return

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setPendingScrollTarget(null)
  }, [currentPage, pendingScrollTarget])

  const handleNavigate = (page) => {
    if (page === 'about') {
      setCurrentPage('home')
      setPendingScrollTarget('sobre-nosotros')
      return
    }

    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAddToCart = (product) => {
    setCartItem((currentItem) => {
      if (currentItem?.id === product.id) {
        return {
          ...currentItem,
          quantity: currentItem.quantity + 1,
          shippingCost: product.shipingCost || currentItem.shippingCost,
        }
      }

      return {
        ...product,
        quantity: 1,
      }
    })
    setIsCartOpen(true)
  }

  const handleProductDoubleClick = (product) => {
    setSelectedProduct(product)
  }

  const handleIncrement = () => {
    setCartItem((currentItem) => ({
      ...currentItem,
      quantity: currentItem.quantity + 1,
    }))
  }

  const handleDecrement = () => {
    setCartItem((currentItem) => ({
      ...currentItem,
      quantity: Math.max(1, currentItem.quantity - 1),
    }))
  }

  return (
    <div className="app">
      <TopBar />
      <Navbar cartCount={cartItem?.quantity || 0} onCartOpen={() => setIsCartOpen(true)} onNavigate={handleNavigate} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <Categories />
            <FeaturedProduct />
            <ProductGrid onAddToCart={handleAddToCart} onProductDoubleClick={handleProductDoubleClick} />
            <AboutFounder />
            <Mission />
            <Testimonials />
            <Newsletter />
          </>
        )}
        {currentPage === 'bombitas' && (
          <CategoryPage
            title="Bombas de defumación"
            description="Pequeños rituales de gran poder. Las bombas de defumación liberan humo denso y concentrado, ideal para limpiezas profundas, abrir caminos y transformar la energía de tu espacio."
            products={bombitasDeDefumacion}
            productCount={bombitasDeDefumacion.length}
            onAddToCart={handleAddToCart}
            onProductDoubleClick={handleProductDoubleClick}
          />
        )}
      </main>
      <Footer />
      <CartDrawer
        isOpen={isCartOpen}
        item={cartItem}
        onClose={() => setIsCartOpen(false)}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={() => setCartItem(null)}
      />
      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
      <FloatingHelp />
    </div>
  )
}

export default App
