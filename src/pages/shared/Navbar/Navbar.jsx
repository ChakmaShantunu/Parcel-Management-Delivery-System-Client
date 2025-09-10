import React from 'react';
import { NavLink } from 'react-router';
import ProFastLogo from '../ProFastLogo/ProFastLogo';
import { IoMdArrowUp } from "react-icons/io";

const Navbar = () => {
    const navItems = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink></li>
        <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "active-link" : ""}>Dashboard</NavLink></li>
        <li><NavLink to='/coverage' className={({ isActive }) => isActive ? "active-link" : ""}>Coverage</NavLink></li>
        <li><NavLink to="/beARider" className={({ isActive }) => isActive ? "active-link" : ""}>Be a Rider</NavLink></li>
    </>
    return (
        <div className="navbar bg-bg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <ProFastLogo></ProFastLogo>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <button className='btn text-accent rounded-lg border-secondary'>Sign In</button>
                <button className='btn btn-primary text-accent-content rounded-lg border-none'>Be A Rider</button>
                <div className='bg-black w-10 h-10 rounded-full flex items-center justify-center cursor-pointer'>
                    <div className=''>
                        <IoMdArrowUp className='text-primary rotate-45' size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;