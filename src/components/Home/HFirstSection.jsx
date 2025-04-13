import React from 'react'

function HFirstSection() {

    return (
        <>
            <section className="bg-[#B50322] text-white text-center py-20">
                <div className="container mx-auto px-4 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="text-center md:relative md:left-[120px] mt-[120px] sm:text-left">
                        <h2 className="text-[18px]">
                            Best Choice
                        </h2>
                        <h1 className="text-6xl text-[#FDA10A] font-bold mt-2">
                            CHICAGO FIRE
                        </h1>
                        <p className="mt-4 text-lg">
                            The delicious, spicy, and cheesy pizza that you will love!
                        </p>
                        <div className="mt-6">
                            <button className="bg-black text-white px-6 py-2 uppercase rounded-md">
                                Order Now
                            </button>
                            <span className="text-2xl text-[#FDA10A] font-bold ml-4">
                                $7.99
                            </span>
                        </div>
                    </div>
                    <div className="mt-10 sm:mt-0">
                        <img className="w-full lg:w-[500px] mx-auto" src="h1.png" alt="Pizza with toppings" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HFirstSection;
