"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/button";
import NavigationBar from "@/components/navbar";
import { Card, CardContent, CardFooter } from "@/components/card";
import { useToast } from "@/components/use-toast";
import {Metadata} from "next"


export default function DetailProduct() {
  const { toast } = useToast();
  const count = 1;
  const { id } = useParams();
  const back = useRouter();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
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
    <>
      <NavigationBar />

      <div className="w-11/12 mx-auto py-4">
        {product && (
          <Card
            key={product.id}
            className="bg-white w-full mx-auto h-max flex flex-col"
          >
            <div className="mt-4 w-1/3 md:w-44 mx-auto">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <CardContent className="relative flex flex-col">
              <div className="flex justify-between items-center">
                <Button size="icon" onClick={() => back.back()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                </Button>
                <p className="text-purple-600">{product.category}</p>
              </div>
              <h1 className="text-lg mt-1">{product.title}</h1>
              <div className="mt-1 w-max flex flex-row items-center space-x-2">
                <p className="font-bold">
                  {product.price.toLocaleString("en-EN", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
                <p className="">
                  ⭐{product.rating.rate} - {product.rating.count} in stock
                </p>
              </div>
              <p className="mt-3 text-gray-600 line-clamp-5">{product.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center space-x-3">
              <div className="flex flex-row space-x-2 items-center">
                <Button size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </Button>
                <p className="text-lg">{count}</p>
                <Button size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </Button>
              </div>
              <Button
                onClick={() => {
                  toast({
                    title: "Success",
                    description: "Berhasil Menambahkan Barang Kedalam Cart",
                  });
                }}
              >
                Add To Cart
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </>
  );
}
