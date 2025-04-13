import React from 'react';

function CSecondSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 px-[120px] gap-8 items-start">
        <div>
          <p className="text-[#FFA609] text-lg mb-2">Talk About Us</p>
          <h1 className="text-4xl font-bold mb-2">Top Clients</h1>
          <h2 className="text-3xl text-[#FFA609] font-bold mb-4">Reviews</h2>
          <p className="text-gray-600 mb-6">
            Duis ultrices lacus sed turpis tincidunt id. Scelerisque in dictum non consectetur a erat nam. Magris dis ultriceseruntipent montes nascetur orci ridiculus in posuere aliquam sagittis.
          </p>
          <div className="flex space-x-4">
            <button className="bg-black text-white py-2 px-4 rounded">YUMMY PIZZA</button>
            <a className="text-gray-600 underline" href="#">Leave Review &gt;</a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img className="rounded-lg shadow-lg w-full" src="/r-fs1.jpg" alt="Children enjoying pizza" />
          <div>
            <img className="rounded-lg shadow-lg w-full" src="/r-fs2.jpg" alt="Family eating pizza together" />
            <p className="text-center mt-2 text-gray-600 italic">
              Super yummy pizza <i className="fas fa-heart"></i>
            </p>
          </div>
          <img className="rounded-lg shadow-lg w-full sm:col-span-2" src="/r-fs3.jpg" alt="Man enjoying a slice of pizza" />
        </div>
      </div>
    </div>
  );
}

export default CSecondSection;
