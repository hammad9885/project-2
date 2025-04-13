import React from 'react'
import { FaClock, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'


function Footer() {


    return (
        <>
            <footer className="bg-black text-white px-6 md:px-16 lg:px-[120px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-10 lg:space-y-0">
          <div className="max-w-xs">
            <h2 className="text-xl font-bold mb-2">Pizzeria</h2>
            <p className="text-sm text-gray-300">
              Quis hendrerit dolor magna eget est lorem ipsum dolor.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-start lg:justify-center">
            {['Home', 'Menu', 'Delivery', 'Payment', 'About Us', 'Contact'].map((item, index) => (
              <a key={index} href="#" className="text-sm hover:text-[#FDA10A] transition">
                {item}
              </a>
            ))}
          </div>

          <div className="text-left lg:text-right">
            <div className="flex items-center space-x-2 mb-1">
              <FaClock className="text-[#FDA10A]" />
              <span className="text-sm font-semibold">WORKING HOURS</span>
            </div>
            <p className="text-sm text-gray-300">7:00 - 24:00</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#FDA10A] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#FDA10A] transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#FDA10A] transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
        </>
    )
}
export default Footer;