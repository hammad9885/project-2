import React from 'react'

function CThreeSection() {
    

    return (
        <>
           <div className="bg-[#f9f4ef] py-12 px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] mx-auto">
    <div className="absolute w-full h-full rounded-full bg-[#e2d5ca] -top-5 -left-5 z-0"></div>
        <img src="/h-e2.jpg" className='w-full h-full rounded-full relative z-10' />
    <div className="absolute w-4 h-4 bg-[#e2d5ca] rounded-full top-0 left-0"></div>
    <div className="absolute w-3 h-3 bg-[#e2d5ca] rounded-full top-2 left-12"></div>
  </div>
  <div className="w-full max-w-md mx-auto">
    <p className="text-[#FFA609] font-semibold mb-1">Ask a Question</p>
    <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-yellow-500"
      />
      <input
        type="email"
        placeholder="help@elyx.com"
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-yellow-500"
      />
      <textarea
        placeholder="Message"
        rows="4"
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-yellow-500"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-[#FFA609] text-white font-semibold py-2 rounded hover:bg-yellow-600 transition"
      >
        SEND
      </button>
    </form>
  </div>
</div>
    
        </>
    )
}
export default CThreeSection