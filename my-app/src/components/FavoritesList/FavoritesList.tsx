import ProductCard from "../ProductCard/ProductCard"
import { useFavorite } from "../Store/storeFavorites"
import "./favoritesList.css"

export default function FavoritesList() {
    const favorites = useFavorite(s => s.favorites)

    return (
        <div className="cards-favorites">
            {favorites.map((f) => (
                <ProductCard key={f.id} {...f}/>
            ))}
        </div>
    )
}
