import ProductCard from "../ProductCard/ProductCard"
import { useProductsStore } from "../Store/StoreProducts"

export default function ProductsList() {
    const products = useProductsStore(s => s.products)

    return (
        <div>
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}
