import { useProductsStore } from "../Store/StoreProducts";
import { useEffect } from "react";
import axios from "axios";


type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}


export function useFetch(url: string) {
    const products = useProductsStore(s => s.products)
    const setProducts = useProductsStore(s => s.setProducts)

    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get<Product[]>(url)
            setProducts(data)
        }
        fetchProducts()
    }, [url])
    return [products, setProducts]
}