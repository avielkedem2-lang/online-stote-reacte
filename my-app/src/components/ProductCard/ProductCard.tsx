import { Link } from "react-router"
import "./ProductCard.css"
import { useFavorite } from "../Store/storeFavorites"
import { useMemo } from "react"


type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

export default function ProductCard(props: Product) {
    const favorites = useFavorite(s => s.favorites)
    const addFavorite = useFavorite(s => s.addFavorite)
    const removeFavorite = useFavorite(s => s.removeFavorite)
    const product = useMemo(() => favorites.find((p) => { return p.id === props.id }), [favorites])
    const hart = product ? "❤️" : "♡"
    const isInFavorite = () => {
        if (product) {
            removeFavorite(product)
        } else {
            addFavorite(props)
        }

    }
    return (
        <div className="card">
            <Link to={`/products/${props.id}`}>
                <img className="img" src={props.image} alt="image" />
            </Link>
            <h4>{props.title}</h4>
            <p>{props.price}</p>
            <button onClick={isInFavorite} className="hart">{hart}</button>

        </div>
    )
}
