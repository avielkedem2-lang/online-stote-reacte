import { Link } from "react-router"


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
        <div>
            <Link to={`products/${props.id}`}>
                <img src={props.image} alt="image" />
                <h4>{props.title}</h4>
                <p>{props.price}</p>
            </Link>
        </div>
    )
}
