import { useEffect, useMemo, useRef, useState } from "react"
import { useProductsStore } from "../Store/StoreProducts"
import ProductCard from "../ProductCard/ProductCard"
import "./searchBar.css"

export default function SearchBar() {
    const products = useProductsStore(s => s.products)
    const [title, setTitle] = useState<string>()
    const productFound = useMemo(() => products.filter((p) => p.title.toLowerCase().includes(title!.toLowerCase())), [title])

    const input = useRef<HTMLInputElement>(null)
    useEffect(() => {
        input.current?.focus()
    }, [input])
    return (
        <div >
            <input ref={input} type="text" placeholder="Search" onChange={(e) => setTitle(e.target.value)} />
            <section className="cards-search">
                {productFound.map((p) => (
                    <ProductCard key={p.id} {...p} />
                ))}
            </section>
        </div>
    )
}
