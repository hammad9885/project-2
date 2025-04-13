import React from 'react'
const image=[
    {
        id:1,
        img:"/h-e1.jpg"
    },
    {
        id:2,
        img:"/h-e2.jpg"
    },
    {
        id:3,
        img:"/h-e3.jpg"
    },
    {
        id:4,
        img:"/h-e4.jpg"
    },
]
function HEightSection() {
    

    return (
        <>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {image.map((im)=>(
              <div className='my-4'>
                <img src={im.img} className='h-94 w-full' />
            </div>
            ))}
            </div> 
        </>
    )
}
export default HEightSection;