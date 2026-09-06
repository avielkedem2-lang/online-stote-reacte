import ProductCard from "../ProductCard/ProductCard"
import { useProductsStore } from "../Store/StoreProducts"
import "./ProductsList.css"

export default function ProductsList() {
    const products = useProductsStore(s => s.products)

    return (
        <div className="cards">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}
