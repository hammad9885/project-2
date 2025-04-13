import React from 'react'

function CFiveSection() {


    return (
        <>
            <div className="container mx-auto py-10 px-4">
                <div className="text-center mb-10">
                    <img src="/woman.jpeg" alt="Jane Feloni" className="rounded-full w-24 h-24 mx-auto" />
                    <h1 className="text-2xl font-bold mt-4">Jane Feloni</h1>
                </div>

                <div className="grid grid-cols-1 px-[120px] md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            name: "Rhiana Giveday",
                            image: "/woman1.jpeg",
                            review: "Consequat id porta nibh venenatis cras sed felis. Id nibh tortor id aliquet...",
                        },
                        {
                            name: "John Beef",
                            image: "/man.jpeg",
                            review: "Facilisis ornare suspendisse sed nisi lacus sed viverra. Arcu non odio euismod...",
                        },
                        {
                            name: "Patrice Stone",
                            image: "/man1.jpeg",
                            review: "Massa massa ultricies mi quis hendrerit dolor magna eget est. Mauris ultrices eros...",
                        },
                        {
                            name: "Daniel Turner",
                            image: "/man2.jpeg",
                            review: "Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Vitae sapien...",
                        },
                        {
                            name: "Alex Solomon",
                            image: "/man3.jpeg",
                            review: "Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Vitae sapien...",
                        },
                        {
                            name: "Jozefo Naylor",
                            image: "/man4.jpeg",
                            review: "Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Vitae sapien...",
                        },
                    ].map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600 mb-4">"{testimonial.review}"</p>
                            <div className="flex items-center">
                                <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-12 h-12 mr-4" />
                                <div>
                                    <h2 className="text-lg font-bold">{testimonial.name}</h2>
                                    <div className="text-[#FFA609]">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
export default CFiveSection