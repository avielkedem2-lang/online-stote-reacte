import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/pages/Home.tsx'
import Favorites from './components/pages/Favorites.tsx'
import Layout from './components/Layout/Layout.tsx'
import { useFetch } from './components/Hooke/useFetch.ts'
import { useProductsStore } from './components/Store/StoreProducts.ts'
import ProductDetailPage from './components/pages/ProductDetailPage.tsx'

function App() {
  const [products] = useFetch("https://fakestoreapi.com/products")
  console.log(products);
  const addProducts = useProductsStore(s => s.setProducts)
  if (Array.isArray(products)) {
    addProducts(products)
  }

  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/products/:id' element={<ProductDetailPage />} />
        </Route>
        <Route path='*' element={"404 not found"} />
      </Routes>
    </div>
  )
}

export default App
