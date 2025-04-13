import React from 'react'

function HSevenSection() {
    

    return (
        <>
         <div className="container mx-auto px-4 py-12">
   <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-[120px]">
    <div className="text-center md:text-left mb-8 md:mb-0">
     <p className="text-[#FFA609] italic">
      Lovely Memories
     </p>
     <h1 className="text-4xl font-bold">
      Our Best
      <span className="text-[#FFA609]">
       Pizza Lovers.
      </span>
     </h1>
     <button className="mt-4 px-6 py-2 bg-black text-white font-bold">
      ALL REVIEWS
     </button>
    </div>
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
     <div className="bg-white shadow-lg p-6 rounded-lg">
      <div className="flex items-center mb-4">
       <img alt="Portrait of Rhiana Udvady" className="w-12 h-12 rounded-full mr-4" height="50" src="/h-se2.jpg" width="50"/>
       <div>
        <h2 className="font-bold">
         Rhiana Udvady
        </h2>
        <div className="text-[#FFA609]">
         <i className="fas fa-star">
         </i>
         <i className="fas fa-star">
         </i>
         <i className="fas fa-star">
         </i>
         <i className="fas fa-star">
         </i>
         <i className="fas fa-star">
         </i>
        </div>
       </div>
      </div>
      <p className="text-gray-600">
       "Consequat id porta nibh venenatis cras sed felis. Etim lobortis scelerisque fermentum dui faucibus in ornare."
      </p>
     </div>
     <div className="bg-white shadow-lg p-6 rounded-lg">
      <div className="flex items-center mb-4">
       <img alt="Portrait of John Beef" className="w-12 h-12 rounded-full mr-4" height="50" src="/h-se1.jpg" width="50"/>
       <div>
        <h2 className="font-bold">
         John Beef
        </h2>
        <div className="text-[#FFA609]">
         <i className="fas fa-star">
         </i>
         <i className="fas fa-star">
         </i>
         <i className="fas fa-star">
         </i>
         <i className="fas fa-star">
         </i>
         <i className="fas fa-star">
         </i>
        </div>
       </div>
      </div>
      <p className="text-gray-600">
       "Facilisis ornare suspendisse sed nisi lacus sed viverra. Netus et malesuada fames ac turpis egestas. Auctor urna nunc id. "
      </p>
     </div>
    </div>
   </div>
  </div>
        </>
    )
}
export default HSevenSection;