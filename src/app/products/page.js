import NavigationBar from "@/components/navbar";
import Link from "next/link";
import React from "react";

const data = [
    {
        id: 1,
        title: 1,
        price: 5000
    },
    {
        id: 2,
        title: 2,
        price: 15000
    },
    {
        id: 3,
        title: 3,
        price: 25000
    },
]

async function getAllProducts() {
    const res = await fetch("https://fakestoreapi.com/products")
    return res.json()
}

export default async function Products() {
    const productsData = await getAllProducts()

    return (
        <>
            <NavigationBar />

            <main>Halaman Produk</main>

            <div className="flex flex-col">
                {productsData.map((items) => {
                    return (
                        <Link href={`/products/${items.id}`} key={items.id}
                            className="text-lg hover:text-blue-500">{items.title} </Link>
                    )
                })}
            </div>
        </>
    )
}