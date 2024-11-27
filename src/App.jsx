import { useState } from "react"
import ProductPagee from "./Components/ProductPageee/ProductPageee"
import Header from "./Components/Header/Header"

function App() {

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product]) 
  }

  return (
    <>
      <Header cartCount={cart.length} />
      <ProductPagee addToCart={addToCart} />
    </>
      
  )
}

export default App