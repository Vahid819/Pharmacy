'use client'
import { useState } from "react"

function useProductStorage(initialProducts = []) {
    const [products, setProducts] = useState(initialProducts)

    const addProduct = (product) => {
        setProducts(prev => [...prev, product])
    }

    const clearProducts = () => {
        setProducts([])
    }

    return {
        products,
        addProduct,
        clearProducts
    }
}

export default useProductStorage