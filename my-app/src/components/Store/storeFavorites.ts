import { create } from "zustand";


type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}


type FavoritesType ={
    favorites: Product[],
    addFavorite: (product: Product) => void,
    removeFavorite: (product: Product) => void
}


export const useFavorite = create<FavoritesType>((set) => ({
    favorites: [],
    addFavorite: (product: Product) => set((s) => ({favorites: [...s.favorites, product]})),
    removeFavorite: (product: Product) => set((s) => ({favorites: s.favorites.filter((p) => {return p.id !== product.id})}))
}))