"use client"

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function DetailProduct() {
    const count = 1
    const { id } = useParams();
    const back = useRouter()
    const [product, setProduct] = useState(null);

    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            console.log(data)
            setProduct(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchProduct();
        }
    }, [id]);

    if (!product) {
        return <div>Loading product...</div>;
    }

    return (
        <div className="w-11/12 mx-auto py-4">
            {product &&
                <div key={product.id} className="p-5 bg-white w-full mx-auto h-max flex flex-col md:flex-row md:space-x-4">
                    <div className="w-1/3 md:w-44 mx-auto">
                        <img src={product.image} alt={product.title} className="object-contain object-fit object-cover" />
                    </div>
                    <div className="relative flex flex-col">
                        <div className="flex justify-between items-center">
                            <Button variant="outline" size="icon" onClick={() => back.back()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                            </Button>
                            <p className="text-purple-600">{product.category}</p>
                        </div>
                        <h1 className="truncate">{product.title}</h1>
                        <div className="w-max flex flex-row items-center space-x-2">
                            <p className="font-bold">{product.price.toLocaleString('en-EN', { style: "currency", currency: "USD" })}</p>
                            <p className="">⭐{product.rating.rate}</p>
                        </div>
                        <p className="mt-3 text-gray-600">{product.description}</p>
                        <div className="flex flex-row space-x-3 mt-4">
                            <div className="flex flex-row space-x-2 items-center">
                                <Button variant="outline" size="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>

                                </Button>
                                <p className="text-lg">{count}</p>
                                <Button variant="outline" size="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                </Button>
                            </div>
                            <Button>Add To Cart</Button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
