import React from 'react'

function ASixSection() {
    

    return (
        <>
             <section className="py-16 text-center bg-white">
        <h3 className="text-orange-400 italic">Most Populars</h3>
        <h2 className="text-3xl font-bold mb-10">Top Dishes</h2>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          <div>
            <img src="/h-ts2.jpg" className="mx-auto w-24" alt="Italian Beef" />
            <h4 className="mt-2 font-semibold">Italian Beef</h4>
            <p className="text-[#FFA609]">$23.00</p>
            <button className="text-xs text-[#e08e00] border mt-1 px-3 py-1">ADD TO CART</button>
          </div>
         
          <div>
            <img src="/m-sal1.png" className="mx-auto w-[72px]" alt="Vanilla Cheesecake" />
            <h4 className="mt-2 font-semibold">Chiken Salad</h4>
            <p className="text-[#FFA609]">$14.00</p>
            <button className="text-xs text-[#e08e00] border mt-1 px-3 py-1">ADD TO CART</button>
          </div>
          <div>
            <img src="/m-sal.png" className="mx-auto w-[72px]" alt="Vanilla Cheesecake" />
            <h4 className="mt-2 font-semibold">Salad</h4>
            <p className="text-[#FFA609]">$15.00</p>
            <button className="text-xs text-[#e08e00] border mt-1 px-3 py-1">ADD TO CART</button>
          </div>
        </div>
      </section>
        </>
    )
}
export default ASixSection