import React from 'react'

function ASecondSection() {
    

    return (
        <>
           <div class="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center lg:items-start">
   <div class="lg:w-1/2 mb-8 ms-[120px] lg:mb-0">
    <h2 class="text-[#f9a825] text-xl mb-2">
     Welcome to Pipirima
    </h2>
    <h1 class="text-4xl font-bold mb-2">
     Your Loved Food
    </h1>
    <h1 class="text-4xl font-bold text-[#f9a825] mb-4">
     is Made Gold Hands!
    </h1>
    <p class="mb-4">
     Gravida rutrum quisque non tellus ac tincidunt imperdiet. Elementum curabitur nunc sed velit dignissim sodales ut eu. Ultrices sed tempus urna et pharetra pharetra massa massa ultricies. Quam adipiscing vitae proin sagittis nisl.
    </p>
    <p class="mb-8">
     Eleifend pretium fusce id velit ut tortor. Lorem ipsum dolor amet consectetur adipiscing malesuada libero.
    </p>
    <div class="flex space-x-4">
     <button class="bg-black text-white px-6 py-2">
      OUR MENU
     </button>
     <a class="text-black underline" href="#">
      Contact Us &gt;
     </a>
    </div>
   </div>
   <div class="lg:w-1/2 flex flex-col me-[120px] space-y-4">
    <div class="flex space-x-4">
     <img alt="A hand placing a garnish on a dish" class="w-1/2" src="/a-fs1.jpeg"/>
     <img alt="A chef holding a dish and smiling" class="w-1/2" src="/a-fs2.jpeg"/>
    </div>
    <div class="flex space-x-4">
     <img alt="A chef tasting food with a spoon" class="w-1/2" src="/a-fs3.jpeg"/>
     <div class="w-1/2 flex items-center justify-center">
      <p class="script-font text-xl">
       Enjoy yummy dishes
       <i class="fas fa-heart">
       </i>
      </p>
     </div>
    </div>
   </div>
  </div>

        </>
    )
}
export default ASecondSection