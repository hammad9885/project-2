import React from 'react'

const items=[
    {
        id:1,
        image:"/h-ns1.jpg",
        manu:"vagitable",
        name:"Justo donec incididunt enim diam vulputate",
        para:"Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Dolor sed adipiscing diam donec adipiscing.",
        date:"kelly • September 3, 2021"
    },
    {
        id:2,
        image:"/h-ns2.jpg",
        manu:"Pizza",
        name:"Aenean praesent elit mattis scelerisque mauris",
        para:" Convallis posuere morbi leo urna molestie at elementum eu facilisis. Feugiat in fermentum praesent semper.",
        date:"kelly • August 28, 2021"
    },
    {
        id:3,
        image:"/h-ns3.jpg",
        manu:"Pizza",
        name:"Placerat duis ultricies lacus sed vulputate diam",
        para:"Felis donec et odio pellentesque diam volutpat commodo. Velit aliquet sagittis id consectetur purus ut.",
        date:"kelly • August 21, 2021"
    },
]

function HNineSection() {


    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h2 className="text-[#FFA609] text-lg">
                        Recent Articles
                    </h2>
                    <h1 className="text-4xl font-bold">
                        Latest News
                    </h1>
                </div>
                <div className="grid md:grid-cols-3 mx-[120px] gap-8">
                    {items.map((i)=>(
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img alt="A variety of fresh ingredients and a bowl of soup" className="w-full h-48 object-cover" height="400" src={i.image} width="600" />
                        <div className="p-4">
                            <span className="bg-[#FFA609] text-white text-xs font-bold px-2 py-1 rounded-full">
                                {i.manu}
                            </span>
                            <h3 className="font-bold text-xl mt-2">
                                {i.name}
                            </h3>
                            <p className="text-gray-600 mt-2">
                            {i.para}
                            </p>
                            <a className="text-[#FFA609] font-bold mt-4 inline-block" href="#">
                                READ MORE
                            </a>
                            <p className="text-gray-400 text-sm mt-2">
                                {i.date}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default HNineSection;