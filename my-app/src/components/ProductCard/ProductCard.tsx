import { Link } from "react-router"
import "./ProductCard.css"


type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

export default function ProductCard(props: Product) {
    return (
        <div className="card">
            <Link to={`/products/${props.id}`}>
                <img className="img" src={props.image} alt="image" />
            </Link>
            <h4>{props.title}</h4>
            <p>{props.price}</p>
            <button className="hart">♡</button>

        </div>
    )
}
