// "use client";

import Link from "next/link";
import Image from "next/image";
import React,{Suspense} from "react";
import NavigationBar from "@/components/navbar";
import { Card, CardContent } from "@/components/card";
import SkeletonProducts from "./loading";

export const metadata = {
  title: "Products",
  description: "This is a Products Page"
}

async function getAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function Products() {
  const productsData = await getAllProducts();

  return (
    <>
      <NavigationBar />

<Suspense fallback={<SkeletonProducts/>}>
      <section className="w-11/12 mx-auto py-4">
        <main className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 gap-3">
          {productsData.map((items) => {
            return (
              <Card key={items.id} className="bg-white h-full">
                <div className="mt-2 flex justify-center items-center w-full mx-auto h-52">
                  <Image
                    src={items.image}
                    width={128}
                    height={128}
                    alt={items.title}
                    className="object-contain w-auto h-auto"
                  />
                </div>

                <CardContent className="flex flex-col space-y-1">
                  <Link
                    href={`/products/${items.id}`}
                    className="text-base line-clamp-2"
                  >
                    {items.title}
                  </Link>
                  <p className="font-bold">
                    {items.price.toLocaleString("en-EN", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                  <p className="text-sm">
                    ⭐{items.rating.rate} - {items.rating.count} in stock{" "}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </main>
      </section>
</Suspense>
    </>
  );
}
