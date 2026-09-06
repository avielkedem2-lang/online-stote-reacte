import { Link, useParams } from "react-router"
import { useFetch } from "../Hooke/useFetch"
import "./ProductsDetails.css"


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
    console.log(products);
    if (typeof (products) !== "object") return (<>error</>)
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
                    <button>
                        add to favorites
                    </button>
                </section>
            </section>

        </div>
    )


}
