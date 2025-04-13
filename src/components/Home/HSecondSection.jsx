import React from 'react'

function HSecondSection() {


    return (
        <>
            <div className=" relative bottom-[70px] justify-center p-8 rounded-lg flex space-x-4">
                <div className="text-center">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <img alt="Pizza image" className="w-24 h-24 mx-auto" src="/h-s1.jpg" />
                    </div>
                    <p className="mt-2 text-lg font-semibold hover:text-orange-500">
                        PIZZA
                    </p>
                </div>
                <div className="text-center">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <img alt="Soup image" className="w-24 h-24 mx-auto" src="/h-s2.jpg" />
                    </div>
                    <p className="mt-2 text-lg font-semibold hover:text-orange-500">
                        SOUPS
                    </p>
                </div>
                <div className="text-center">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <img alt="Salad image" className="w-24 h-24 mx-auto" src="/h-s3.jpg" />
                    </div>
                    <p className="mt-2 text-lg font-semibold hover:text-orange-500">
                        SALADS
                    </p>
                </div>
                <div className="text-center">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <img alt="Dessert image" className="w-24 h-24 mx-auto" src="/h-s4.jpg" />
                    </div>
                    <p className="mt-2 text-lg font-semibold hover:text-orange-500">
                        DESSERTS
                    </p>
                </div>
            </div>

        </>
    )
}
export default HSecondSection;