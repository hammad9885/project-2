import React from 'react'

function MSecondSection() {
    

    return (
        <>
         <div className="container my-9 mx-auto p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center md:justify-between">
  <div className="flex flex-col items-center md:items-start">
    <div className="relative md:ms-[120px]">
      <img
        src="/m-s1.jpg"
        alt="Pizza with toppings"
        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full"
      />
      <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#fa9c06] text-white font-bold py-2 px-4 rounded-full">
        ORDER NOW
      </button>
    </div>
  </div>

  <div className="mt-8 md:mt-0 md:pr-[120px] md:ml-8 max-w-xl w-full space-y-6">
    <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">Pizza</h1>

    {[
      {
        img: "/m-s2.jpg",
        title: "Meaty Legend",
        desc: "Pepperoni, Italian sausage, smoked chicken, canadian bacon, tomato sauce, red onion, black olives, mushrooms.",
        price: "$25.00",
      },
      {
        img: "/m-s3.jpg",
        title: "Diavola",
        desc: "Spicy pepperoni, basil, white truffle oil, ricotta cheese, mozzarella, sausage, parmesan.",
        price: "$26.00",
      },
      {
        img: "/m-s4.jpg",
        title: "Gino's Supreme",
        desc: "Pepperoni, Italian sausage, onions, green peppers, mushrooms, basil, parmesan.",
        price: "$21.00",
      },
      {
        img: "/m-s5.jpg",
        title: "Chicago Fire",
        desc: "Pepperoni, Italian sausage, onions, green peppers, mushrooms, basil, parmesan.",
        price: "$17.99",
      },
    ].map((item, i) => (
      <div key={i} className="flex items-start justify-between">
        <div className="flex items-start">
          <img
            src={item.img}
            alt={item.title}
            className="w-12 h-12 object-cover rounded-full mr-4"
          />
          <div>
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        </div>
        <span className="text-lg font-bold whitespace-nowrap">{item.price}</span>
      </div>
    ))}
  </div>
</div>
        </>
    )
}
export default MSecondSection;