import './App.css'
import { useState } from 'react'
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
import { featuredProduct } from './data/products'

function App() {
  const [cartItem, setCartItem] = useState({
    ...featuredProduct,
    quantity: 1,
  })
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

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
      <Navbar cartCount={cartItem?.quantity || 0} onCartOpen={() => setIsCartOpen(true)} />
      <main>
        <Hero />
        <Categories />
        <FeaturedProduct />
        <ProductGrid onAddToCart={handleAddToCart} onProductDoubleClick={handleProductDoubleClick} />
        <AboutFounder />
        <Mission />
        <Testimonials />
        <Newsletter />
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
