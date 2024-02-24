import React from 'react';
import headerLogo from '../assets/images/logo.webp';
import hamburger from '../assets/icons/hamburger.svg';
import { navLinks } from '../constants/index';

const Nav = () => {
    return (
        <header className='padding-x py-4 w-full shadow-slate-50'>
            <div className='column-3'>
                <nav className='flex justify-between items-center max-container'>
                    <a href="/">
                        <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
                    </a>
                    <ul className='flex-1 flex justify-center items-center gap-12 max-lg:hidden'>
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className='font-montserrat leading-normal font-medium text-lg text-slate-gray hover:underline hover:underline-offset-8 decoration-2 hover:text-[#24ab70]'>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className='max-lg:hidden'>
                        <button className="px-8 py-2 rounded-full bg-[#24ab70] text-white focus:ring-1 hover:shadow-lg">
                            Login
                        </button>
                    </div>
                    <div className='hidden max-lg:block'>
                        <img src={hamburger} alt="Hamburger" width={25} height={25} />
                    </div>
                </nav>
            </div>

        </header>
    )
}

export default Nav