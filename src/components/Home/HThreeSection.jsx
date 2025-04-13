import React from 'react'

const Card=[
    {
        id:1,
        image:"/h-ts1.jpg",
        name:"Potato Salad",
        price:"$16.00"
    },
    {
        id:2,
        image:"/h-ts2.jpg",
        name:"Meaty Legend",
        price:"$25.00"
    },
    {
        id:3,
        image:"/h-ts3.jpg",
        name:"Pumpkin Soup",
        price:"$14.00"
    },
    {
        id:4,
        image:"/h-ts4.jpg",
        name:"Gino's Supreme",
        price:"$21.00"
    },
    {
        id:5,
        image:"/h-ts5.jpg",
        name:"Vanilla Cheesecake",
        price:"$14.00"
    },
    {
        id:6,
        image:"/h-ts6.jpg",
        name:"Chicken Salad",
        price:"$15.00"
    },
    {
        id:7,
        image:"/h-ts7.jpg",
        name:"Potato Salad",
        price:"$26.00"
    },
    {
        id:8,
        image:"/h-ts8.jpg",
        name:"Prawn Soup",
        price:"$16.00"
    },
]

function HThreeSection() {
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h2 className="font-Great font-Vibes text-[#FDA10A] text-2xl">
                        Specials For You
                    </h2>
                    <h1 className="text-4xl font-bold">
                        Popular Dishes
                    </h1>
                </div>
                <div className="grid grid-cols-1 mx-[120px] sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Card.map((c)=>(
                    <div className="text-center border p-4">
                        <img className="mx-auto mb-4" src={c.image}  alt={c.name}/>
                        <h3 className="text-xl font-semibold">
                            {c.name}
                        </h3>
                        <p className="text-lg text-gray-600">
                            {c.price}
                        </p>
                        <button className="mt-4 bg-[#FDA10A] text-white py-2 px-4 rounded">
                            ADD TO CART
                        </button>
                    </div>
                    ))}
                </div>
   
   </div>
   <div className="text-center my-8">
    <button className="bg-[#FDA10A] text-white py-2 px-6 rounded">
     ALL PRODUCTS
    </button>
   </div>
           
        </>
    )
}
export default HThreeSection;