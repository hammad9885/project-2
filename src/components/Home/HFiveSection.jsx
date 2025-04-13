import React from 'react'

function HFiveSection() {
    

    return (
        <>
       <section className="bg-[#B50322] text-white py-16">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <p className="italic text-[#FFA609] text-lg">Made with Love</p>
          <h1 className="text-4xl font-bold mt-2">
            We Make the Best <br />
            <span className="text-[#FFA609]">on the Way!</span>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <ul className="mt-6 space-y-2 text-left text-gray-200">
            <li className="flex items-center"><i class="fas fa-check-circle text-[#FFA609] mr-2">
            </i> Duis tempor incididunt ut labore aliquip</li>
            <li className="flex items-center"><i class="fas fa-check-circle text-[#FFA609] mr-2">
            </i> Excepteur sint occaecat dolor</li>
            <li className="flex items-center"><i class="fas fa-check-circle text-[#FFA609] mr-2">
            </i> Voluptate esse ex fugiat nulla pariatur</li>
          </ul>
          <button class="bg-[#FFA609] text-[#B50322] my-9 font-bold py-2 px-6 rounded-full">
     ABOUT US
    </button>
        </div>

       
        <div className="lg:w-1/2 relative">
          <img
          src="/h-fis1.png"
            alt="Pizza"
            className="rounded-full mx-auto w-80 md:w-[400px]"
          />
        
        </div>
      </div>
    </section>
        </>
    )
}
export default HFiveSection;