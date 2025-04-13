import React from 'react';

const chefs = [
  {
    name: 'Anthony Bianco',
    title: 'Main Chef',
    image: '/chef.png',
  },
  {
    name: 'Emil Milka',
    title: 'Sous Chef',
    image: '/a-chef1.png',
  },
  {
    name: 'Leon William',
    title: 'Pizza Chef',
    image: '/a-chef1.png',
  },
];

function AFourSection() {
  return (
    <>
      <div className="text-center py-12">
        <h2 className="text-[#f9a825] text-lg">Behind the Taste</h2>
        <h1 className="text-4xl font-bold mt-2">Meet Our Chefs</h1>
      </div>
      <div className="flex flex-wrap justify-center my-9 gap-8 px-4">
        {chefs.map((chef, index) => (
          <div key={index} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex justify-center mt-8">
              <img
                src={chef.image}
                alt={`Chef ${chef.name}`}
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
            <div className="text-center px-6 py-4">
              <h2 className="text-xl font-bold">{chef.name}</h2>
              <p className="text-gray-600">{chef.title}</p>
              <div className="flex justify-center mt-4">
                <a href="#" className="text-gray-600 mx-2">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-600 mx-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 mx-2">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AFourSection;
