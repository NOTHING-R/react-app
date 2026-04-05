import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Auth from './pages/Auth.jsx'
import Checkout from './pages/Checkout.jsx'
import Products from './pages/ProductDetails.jsx'
import Navbar from './components/Navbar.jsx'
import AuthProvider from './contex/AuthContex.jsx'

function App() {


  return (
    <AuthProvider>
      <div className='app'>
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/products/:id' element={<Products />} />
        </Routes>
      </div >
    </AuthProvider>
  )
}

export default App
