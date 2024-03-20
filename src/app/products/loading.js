import { Skeleton } from "@/components/skeleton";

export default function SkeletonProducts() {
    return (
      <>
        <section className="w-11/12 mx-auto py-4">
          <main className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 gap-3">
            {/* <Skeleton></Skeleton>
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
                  passHref
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
            </Card> */}

<div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
          </main>
        </section>
      </>
    );
  }
  