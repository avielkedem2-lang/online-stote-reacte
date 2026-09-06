import { Link, useParams } from "react-router"
import { useFetch } from "../Hooke/useFetch"
import "./ProductsDetails.css"
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


export default function ProductDetails() {
    const { id } = useParams()
    const [products] = useFetch<Product>(`https://fakestoreapi.com/products/${id}`)
    

    const favorites = useFavorite(s => s.favorites)
    const addFavorite = useFavorite(s => s.addFavorite)
    const removeFavorite = useFavorite(s => s.removeFavorite)

    const product = useMemo(() =>  favorites.find((p) => { return p.id === Number(id) }) , [favorites])
    const text = product ? "Remove" : "Add to Favorite"
    const isInFavorite = () => {
        if (product) {
            removeFavorite(product)
        } else {
            addFavorite(products)
        }

    }
    if (typeof (products) !== "object") return (<>error</>);

    return (
        <div className="card">
            <section className="img-product">
                <img className="img" src={products.image} alt="image" />
            </section>

            <section className="description">
                <h1>{products.title}</h1>
                <button className="but-category">{products.category}</button>
                <h3>${products.price}</h3>
                <p>{products.description}</p>
                <section className="buts">
                    <button>
                        <Link to={"/"}>back to home</Link>
                    </button>
                    <button onClick={isInFavorite}>
                        {text}
                    </button>
                </section>
            </section>
        </div>
    )


}
