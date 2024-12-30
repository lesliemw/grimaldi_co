import HeartButton from "../ui/HeartButton";
import AddToCartButton from "../ui/AddToCartButton";
import Link from "next/link";
import Image from "next/image";

function ProductCard({ src, name, description, price, productId }) {
  return (
    <div>
      <Link href={`/products/${productId}`}>
        <div className="relative ">
          <div className=" w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80 ">
            <Image
              src={src}
              alt={name}
              height={500}
              width={500}
              className="h-full w-full object-fill object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm  text-gray-700">{name}</h3>
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
}

export default ProductCard;
