import React from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router';

const ProFastLogo = () => {
    return (
        <Link to="/">
            <div className='flex items-end'>
                <img className='mb-2' src={logo} alt="ProFast company logo" />
                <h1 className='font-extrabold text-5xl ml-2'>ProFast</h1>
            </div>
        </Link>
    );
};

export default ProFastLogo;