import React from 'react';
const desserts = [
    {
      id: 1,
      name: "Caramel Cake",
      price: "$12.00",
      description: "Caramel, butter, sugar, eggs, flour, milk, salt, vanilla, safflower oil, cream of tartar.",
      image: "/m-des1.png",
    },
    {
      id: 2,
      name: "Cherry Roll",
      price: "$13.00",
      description: "Cherry, butter, sugar, eggs, flour, milk, salt, pineapple topping.",
      image: "/m-des2.png",
    },
    {
      id: 3,
      name: "Vanilla Cheesecake",
      price: "$14.00",
      description: "Caramel, cream cheese, sugar, shredded coconut, maraschino cherries, vanilla ice cream, strawberry topping, pineapple topping.",
      image: "/m-des3.png",
    },
  ];

function MFiveSection() {
    

    return (
        <>
        

    <div className="container mx-auto p-6 my-9 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:ms-[120px] md:w-1/2">
        <h1 className="text-3xl font-bold mb-6">Desserts</h1>
        <div className="space-y-6">
          {desserts.map((item) => (
            <div key={item.id} className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <span className="text-lg font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <div className="relative">
          <img
            alt="Donut with sprinkles"
            className="w-80 h-80 rounded-full"
            src="/m-des.png"
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FDA10A] text-white font-bold py-2 px-4 rounded-full">
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
        </>
    )
}
export default MFiveSection;