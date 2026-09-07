import ProductsList from "../ProductsList/ProductsList";
import SearchBar from "../SearchBar/SearchBar";
import "./pagesCss/Home.css"
export default function Home() {
  return (
    <div>
      <SearchBar />
      <ProductsList />
    </div>
  )
}