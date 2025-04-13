import React from 'react';
const products = [
    {
      name: 'Shrimp Salad',
      oldPrice: '$20.00',
      newPrice: '$17.00',
      image: '/h-s3.jpg',
    },
    {
      name: 'Chicago Fire',
      oldPrice: '$23.00',
      newPrice: '$17.99',
      image: '/h-ts2.jpg',
    },
    {
      name: 'Mushroom Soup',
      oldPrice: '$17.00',
      newPrice: '$13.00',
      image: '/h-s2.jpg',
    },
    {
      name: 'Belgian Waffle',
      oldPrice: '$20.00',
      newPrice: '$16.00',
      image: 'h-ts6.jpg',
    },
  ];
function CFour() {
    

    return (
        <>
             <div className="py-12 px-4 text-center">
      <p className="text-[#FFA609] font-semibold text-lg mb-1">Any Day Offers</p>
      <h2 className="text-3xl font-bold mb-8">Discount Product</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg p-4 relative">
            <span className="absolute top-2 left-2 bg-green-700 text-white text-xs px-2 py-1 rounded">
              SALE!
            </span>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto mx-auto mb-4"
            />
            <h3 className="text-md font-semibold mb-1">{product.name}</h3>
            <div className="text-sm mb-3">
              <span className="line-through text-gray-400 mr-2">{product.oldPrice}</span>
              <span className="text-[#FFA609] font-bold">{product.newPrice}</span>
            </div>
            <button className="bg-[#FFA609] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-yellow-600 transition">
              ADD TO CART
            </button>
          </div>
           ))}
          </div>
          </div>
        </>
    )
}
export default CFour;