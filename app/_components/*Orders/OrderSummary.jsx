import PlacedOrderCard from "./PlacedOrderCard";

const cart = [
  {
    src: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/Q42709s.jpg",
    alt: "white shoes",
    name: "Shoes",
    description: "White high heeled shoes",
    price: 250,
  },
];

function OrderSummary() {
  return (
    <div className="flex flex-col justify-start items-start  bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
      <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
        Order Details
      </p>
      {cart?.map((product, i) => {
        return (
          <PlacedOrderCard
            key={product.id || i}
            src={product.src}
            alt={product.alt}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default OrderSummary;
