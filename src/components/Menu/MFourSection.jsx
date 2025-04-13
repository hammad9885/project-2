import React from 'react';

const Salad = [
  {
    id: 1,
    image: "/m-sal1.png",
    heading: "Chicken Salad",
    price: "$15.00",
    para: "Chicken, cheese, tomato, green onions, chopped roughly.",
  },
  {
    id: 2,
    image: "/m-sal2.png",
    heading: "Potato Salad",
    price: "$16.00",
    para: "Potato, tomato, eggs, lettuce, meat, asparagus, garlic sauce.",
  },
  {
    id: 3,
    image: "/m-sal3.png",
    heading: "Shrimp Salad",
    price: "$17.00",
    para: "Shrimp, lemon, red onion, rice vinegar, unseasoned.",
  },
  {
    id: 4,
    image: "/m-sal4.png",
    heading: "Tri-tip Wedge",
    price: "$18.00",
    para: "Blue cheese crumbles, applewood smoked bacon, parsley, red onions, tomatoes, peppered BBQ sauce, chimichurri.",
  },
];

function MFourSection() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-4 md:p-8">
      <div className="relative ms-[120px]">
        <img
          alt="A colorful salad with various vegetables and ingredients"
          className="w-80 h-80 object-cover rounded-full"
          src="/m-sal.png"
        />
        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#fa9c06] text-white font-bold py-2 px-4 rounded-full">
          ORDER NOW
        </button>
      </div>

      <div className="mt-8 md:mt-0 md:ml-8">
        <h1 className="text-3xl font-bold mb-4">Salads</h1>
        <div className="space-y-4 me-[120px]">
          {Salad.map((i) => (
            <div key={i.id} className="flex items-center">
              <img
                alt={i.heading}
                className="w-12 h-12 object-cover rounded-full mr-4"
                src={i.image}
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">{i.heading}</h2>
                  <span className="text-lg font-semibold">{i.price}</span>
                </div>
                <p className="text-gray-600">{i.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MFourSection;