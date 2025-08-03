
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home/home'
import Product from './pages/product/product'
import Layout from "./layout"



function App() {
  return (
    <HashRouter>
      <Routes> 
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </HashRouter>
    
   
  )
}


export default App
