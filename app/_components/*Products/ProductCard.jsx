import HeartButton from "../ui/HeartButton";
import AddToCartButton from "../ui/AddToCartButton";
import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

// Memoize the ProductCard to avoid unnecessary re-renders
const ProductCard = memo(({ src, name, description, price, productId }) => {
  return (
    <div>
      <Link href={`/products/${productId}`} prefetch={false}>
        <div className="relative ">
          <div className=" w-full relative overflow-hidden rounded-md group-hover:opacity-75 lg:h-80 ">
            <Image
              src={src}
              alt={name}
              fill
              className="h-full w-full object-scale-down object-center lg:h-full lg:w-full"
              loading="lazy" // Lazy-load images
              sizes="(max-width: 1024px) 100vw, 1024px" // Improve responsiveness
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">{name}</h3>
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">€{price}</p>
          </div>
        </div>
      </Link>
      <div className="flex p-2 justify-between">
        <HeartButton />
        <AddToCartButton />
      </div>
    </div>
  );
});

export default ProductCard;
