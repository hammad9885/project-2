import React from 'react'

function MThreeSection() {
    

    return (
        <>
       <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between">
  <div className="w-full md:w-1/2 md:ps-[120px]">
    <h1 className="text-4xl font-bold mb-6">Soups</h1>

    {[
      {
        name: 'Pumpkin Soup',
        price: '$14.00',
        image:"/m-sou1.jpg",
        desc: 'Sugar pumpkin, butternut squash, olive oil, onions, garlic, curry powder, nutmeg, ginger, coconut milk.',
      },
      {
        name: 'Prawn Soup',
        price: '$16.00',
        image:"/m-sou2.jpg",
        desc: 'Prawn, beansprouts, cucumber, coriander.',
      },
      {
        name: 'Mushroom Soup',
        price: '$13.00',
        image:"/m-sou3.jpg",
        desc: 'Fresh mushrooms, chicken broth, onion, dried thyme, butter, milk, flour, salt, ground black pepper, sherry.',
      },
    ].map((soup, idx) => (
      <div key={idx} className="mb-6 flex items-start">
        <img src={soup.image} alt={soup.name} className="w-12 h-12 mr-4" />
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{soup.name}</h2>
            <span className="text-xl font-bold">{soup.price}</span>
          </div>
          <p className="text-gray-600">{soup.desc}</p>
        </div>
      </div>
    ))}
  </div>

  <div className="w-full md:w-1/2 flex flex-col items-center">
    <img src="/m-sou.png" alt="Soup with garnish" className="h-80 object-contain mb-6" />
    <button className="bg-[#fa9c06] text-white me-24 font-bold py-2 px-6 rounded">
      ORDER NOW
    </button>
  </div>
</div> 
        </>
    )
}
export default MThreeSection;