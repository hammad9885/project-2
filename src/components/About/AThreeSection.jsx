import React from 'react';

const categories = [
  { name: 'PIZZA', image: '/h-ts4.jpg' },
  { name: 'SOUP', image: '/m-sou1.jpg' },
  { name: 'SALADS', image: '/m-sal3.png' },
  { name: 'DESSERT', image: '/m-des.png' },
];

function AThreeSection() {
  return (
    <div className="grid grid-cols-2 my-9 px-[120px] sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center text-center p-2">
      {categories.map((item, index) => (
        <div key={index}>
          <img
            src={item.image}
            alt={item.name}
            className="rounded-full mx-auto w-16 h-16"
          />
          <p className="mt-1 text-xs cursor-pointer font-semibold hover:text-[#f9a825]">
            {item.name}
          </p>
        </div>
      ))}

      <div className="text-left col-span-2 sm:col-span-3 lg:col-span-1">
        <h1 className="text-sm font-bold leading-snug">
          Discover our <span className="text-[#f9a825]">Tasty</span> menu
        </h1>
        <p className="text-xs mt-1">
          Fastest delivery on your doorstep <i className="fas fa-motorcycle"></i>
        </p>
      </div>
    </div>
  );
}

export default AThreeSection;
