import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/pages/Home.tsx'
import ProductDetail from './components/pages/ProductDetail.tsx'
import Favorites from './components/pages/Favorites.tsx'
import Layout from './components/Layout/Layout.tsx'
import { useFetch } from './components/Hooke/useFetch.ts'
import { useProductsStore } from './components/Store/StoreProducts.ts'

function App() {
  const [products] = useFetch("https://fakestoreapi.com/products")
  if (Array.isArray(products)) {
    const addProducts = useProductsStore(s => s.setProducts)
    addProducts(products)
  }

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='products/:id' element={<ProductDetail />} />
        </Route>
        <Route path='*' element={"404 not found"} />
      </Routes>
    </>
  )
}

export default App
