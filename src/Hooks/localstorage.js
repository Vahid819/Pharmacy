'use client'
import { useState } from "react"

function useProductStorage(initialProducts = []) {
    const [products, setProducts] = useState(initialProducts)

    const addProduct = (product) => {
        setProducts(prev => [...prev, product])
    }

    const removeProduct = (index) => {
        setProducts(prev => prev.filter((_, i) => i !== index))
    }

    const clearProducts = () => {
        setProducts([])
    }

    return {
        products,
        addProduct,
        removeProduct, // ✅ Exporting this
        clearProducts
    }
}

export default useProductStorage
