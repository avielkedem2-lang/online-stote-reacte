import { create } from "zustand";

type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

type ProductsTypes = {
    products: Product[],
    setProducts: (products: Product[]) => void,
}


export const useProductsStore = create<ProductsTypes>((set) => ({
    products: [],
    setProducts: (products: Product[]) => set(() => ({products})) 
}))