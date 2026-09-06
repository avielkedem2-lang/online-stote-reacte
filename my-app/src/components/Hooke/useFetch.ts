import { useProductsStore } from "../Store/StoreProducts";
import { useEffect, useState } from "react";
import axios from "axios";


type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}


export function useFetch<T>(url: string) {
    const [products, setProducts] = useState<T>()
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get<T >(url)
            setProducts(data)
        }
        fetchProducts()
    }, [url])
    return [products, setProducts]
}