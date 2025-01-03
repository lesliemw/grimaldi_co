import Image from "next/image";

const callouts = [
  {
    name: "Women's Fashion",
    description: "Shop this season's hottest looks for women.",
    image: "/jacket.jpg",
    alt: "callout",
  },
  {
    name: "Men's Fashion",
    description: "Shop all of the latest looks for men.",
    image: "/jacket.jpg",
    alt: "callout",
  },
  {
    name: "Jewelry",
    description: "Find your next heirloom piece here.",
    image: "/jacket.jpg",
    alt: "callout",
  },
  {
    name: "Shoes",
    description: "Treat your feet.",
    image: "/jacket.jpg",
    alt: "callout",
  },
  {
    name: "Handbags",
    description: "Shop for your luxury leather and vegan leather pieces.",
    image: "/jacket.jpg",
    alt: "callout",
  },
  {
    name: "Makeup",
    description: "Because you are worth it.",
    image: "/jacket.jpg",
    alt: "callout",
  },
];

function HomeScreenCallouts() {
  return (
    <div className="bg-gray-100 font-themeFont ">
      <div className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:py-32">
        <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
        <div className="container mx-auto px-8">
          <div className="mt-6  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative flex-1 h-96 w-full overflow-hidden bg-white">
                  <Image
                    src={callout.image}
                    alt={callout.alt}
                    fill
                    className="aspect-square"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreenCallouts;
