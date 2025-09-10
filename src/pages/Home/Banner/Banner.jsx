import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../../../Cors/fall-animation.scss'
import banner1 from '../../../assets/banner/banner1.png'
import banner2 from '../../../assets/banner/banner2.png'
import banner3 from '../../../assets/banner/banner3.png'

const Slider = () => {
    return (
        <AwesomeSlider className='awssld awssld--fallAnimation w-full h-[150px] sm:h-[280px] md:h-[600px] lg:h-[800px]' style={{ background: "transparent" }} mobileTouch={true} organicArrows={false}>
            <div>
                <img src={banner1} alt="" className='transform transition-transform duration-500 hover:scale-105' />
            </div>
            <div>
                <img src={banner2} alt="" className='transform transition-transform duration-500 hover:scale-105' />
            </div>
            <div>
                <img src={banner3} alt="" className='transform transition-transform duration-500 hover:scale-105' />
            </div>
        </AwesomeSlider>
    );
};

export default Slider;