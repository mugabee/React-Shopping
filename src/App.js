import React from 'react'
import Header from './components/Header.js/Header'
import CartDrop from './components/Header.js/CartDrop'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <CartDrop />
      <div>
        <Route path="/" exact>
          <Home />

        </Route>
        <Route path="/CartPage" exact>
          <CartPage />

        </Route>
      </div>
      
    </BrowserRouter>
  )
}

export default App
