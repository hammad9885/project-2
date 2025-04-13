import React from 'react'

function MSixSection() {
    

    return (
        <>
                <div className="container py-9 mx-auto bg-[#F9F5F2] px-4 flex flex-col md:flex-row items-center">
   <div className="md:w-1/2 md:ms-[120px] text-center md:text-left">
    <p className="text-orange-500 font-semibold">
     Fast Delivery
    </p>
    <h1 className="text-4xl font-bold mt-2">
     Your Favorite Pizza,
     <span className="text-orange-500">
      on the Way!
     </span>
    </h1>
    <p className="text-gray-600 mt-4">
     Scelerisque fermentum dui faucibus in ornare quam viverra orci. Interdum velit laoreet id donec ultrices tincidunt. Velit euismod in pellentesque massa placerat duis.
    </p>
    <div className="flex justify-center md:justify-start mt-8 space-x-8">
     <div className="text-center">
      <i className="fas fa-motorcycle text-4xl text-orange-500">
      </i>
      <p className="mt-2 font-semibold">
       Delivery in 30 minutes
      </p>
     </div>
     <div className="text-center">
      <i className="fas fa-shipping-fast text-4xl text-orange-500">
      </i>
      <p className="mt-2 font-semibold">
       Free shipping from $25
      </p>
     </div>
     <div className="text-center">
      <i className="fas fa-door-open text-4xl text-orange-500">
      </i>
      <p className="mt-2 font-semibold">
       Delivery on your doorstep
      </p>
     </div>
    </div>
   </div>
   <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
    <img alt="Pizza box with a pizza inside and a chef illustration on the box" className="w-full max-w-sm" src="/h-fs1.png" width="400"/>
   </div>
   </div>
        </>
    )
}
export default MSixSection;