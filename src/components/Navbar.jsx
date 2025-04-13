import { useState } from 'react';
import { FaBars, FaBiking, FaTimes } from 'react-icons/fa'
import { FaBicycle, FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Navbar() {
    const [open, setOpen] = useState(false)

  
    return (
        <>
            <div className='bg-[#B50322] px-[120px] text-white shadow-lg '>
                <nav className='container mx-auto'>
                    <div className='flex justify-between p-3 items-center '>
                    <a href="#"><img src="/logo.png" alt="Logo" className='h-24'/></a>
                        <ul className='hidden md:flex space-x-6 uppercase text-white'>
                        <li><Link to={'/'} className='hover:text-[#FDA10A]'>Home</Link></li>
                        <li><Link to={'/menu'} className='hover:text-[#FDA10A]'>Menu</Link></li>
                        <li><Link to={'/about'} className='hover:text-[#FDA10A]'>About</Link></li>
                        <li><Link to={'/contact'} className='hover:text-[#FDA10A]'>Contact</Link></li>
                        <li><Link to={'/client'} className='hover:text-[#FDA10A]'>Client</Link></li>
                         </ul>
                        <div className='flex space-x-4 text-2xl'>
                       
                        <div className='hidden md:flex space-x-4 items-center'>
                        <FaCartShopping/>
                        <button className='bg-black p-2 text-[16px] uppercase rounded-md'>quick ouder</button>
                        <FaBiking/>
                        <div className='text-[16px] s'>
                    <p>Fast Delivery</p>
                    <span className='text-[#FDA10A]'>(310) 456-2856</span>
                    </div>
                            </div>
                            
                            <button onClick={() => { setOpen(!open) }} className='md:hidden'>
                                {(open) ? <FaTimes /> : <FaBars />}

                            </button>
                        </div>
                    </div>
                    {open && (
                        <ul className='md:hidden text-center space-y-4 uppercase pb-3 text-white'>
                            <li><Link to={'/'} className='hover:text-[#FDA10A]'>Home</Link></li>
                        <li><Link to={'/menu'} className='hover:text-[#FDA10A]'>Menu</Link></li>
                        <li><Link to={'/about'} className='hover:text-[#FDA10A]'>About</Link></li>
                        <li><Link to={'/contact'} className='hover:text-[#FDA10A]'>Contact</Link></li>
                        <li><Link to={'/client'} className='hover:text-[#FDA10A]'>Client</Link></li>
                        </ul>
                    )}

                </nav>
            </div>
        </>
    )
}
export default Navbar;