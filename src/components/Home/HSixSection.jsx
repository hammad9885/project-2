import React from 'react'
function HSixSection() {
    

    return (
        <>
              <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 md:ms-[120px] flex justify-center md:justify-start mt-10 md:mt-0">
          <img src="/chef.png" alt="Chef" className="w-72 md:w-[350px] object-cover"/>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-[#FFA609] italic font-medium mb-2">
            Preparing the Pizza
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Do We <span className="text-[#FFA609]">Prepare Pizza?</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.
            Mirum est notare quam littera gothica, quam nunc putamus parum claram.
          </p>
          <div className="bg-gray-100 p-4 border-l-4 border-orange-500 mb-6 text-gray-800">
            Pizza, like every dish on the planet, is only as good as the ingredients.
            <div className="text-right font-semibold mt-2">
              Anthony Bianco
            </div>
          </div>
          <button className="bg-[#FFA609] text-black font-bold px-6 py-2 rounded shadow hover:bg-[#ffbe4d] transition duration-300">
            WATCH VIDEO
          </button>
        </div>
      </div>
    </section>
        </>
    )
}
export default HSixSection; 