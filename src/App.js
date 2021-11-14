import React from 'react'
import Header from './components/Header.js/Header'
import CartDrop from './components/Header.js/CartDrop'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import ErrorPage from './pages/ErrorPage'


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
        {/* <Route path="*" exact>
                <ErrorPage/>
              </Route> */}
      </div>
      
    </BrowserRouter>
  )
}

export default App
