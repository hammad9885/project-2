import React from 'react';
const infoCards = [
    {
      title: 'Working Hours',
      content: [
        'Monday - Friday 8.00 - 23.00',
        'Saturday - Sunday 7.00 - 22.00',
      ],
    },
    {
      title: 'Contact Us',
      content: [
        <span key="phone">
          <i className="fas fa-phone-alt text-[#FFA609]"></i> (390) 456-2856, (390) 205-6497
        </span>,
        <span key="email">
          <i className="fas fa-envelope text-[#FFA609]"></i> pizza@pipirima.com
        </span>,
      ],
    },
    {
      title: 'Get Direction',
      content: [
        'Largo Josemaría Escrivá de Balaguer, 7, 00142 Roma RM, Italy',
      ],
    },
  ];
function CSecondSection() {
    

    return (
        <>
         <div className="container px-[120px] mx-auto py-10">
      <div className="grid  gap-6 md:grid-cols-3">
        {infoCards.map((card, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg p-6 text-center md:text-left">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            {card.content.map((text, i) => (
              <p key={i} className="text-gray-600">{text}</p>
            ))}
          </div>
        ))}
      </div>
    </div>

        </>
    )
}
export default CSecondSection