import ProductCard from "../ProductCard/ProductCard"
import { useFavorite } from "../Store/storeFavorites"

export default function FavoritesList() {
    const favorites = useFavorite(s => s.favorites)

    return (
        <div>
            {favorites.map((f) => (
                <ProductCard key={f.id} {...f}/>
            ))}
        </div>
    )
}
