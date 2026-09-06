import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/pages/Home.tsx'
import ProductDetail from './components/pages/ProductDetail.tsx'
import Favorites from './components/pages/Favorites.tsx'
import Layout from './components/Layout/Layout.tsx'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
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
