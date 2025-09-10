import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../../../Cors/fall-animation.scss'
import banner1 from '../../../assets/banner/banner1.png'
import banner2 from '../../../assets/banner/banner2.png'
import banner3 from '../../../assets/banner/banner3.png'

const Slider = () => {
    return (
        <AwesomeSlider className='awssld awssld--fallAnimation' style={{ background: "transparent" }} mobileTouch={true}>
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