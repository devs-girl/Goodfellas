import React from 'react';
import '../../CSS/style.css';
import IndexImg from '../../img/index.png';

const Index = () => {
    return (
        <div className='index-wrapper'>
            <div className="index-top">
                <img src={IndexImg} alt="" />
            </div>
            {/* index-bottom  */}
            <div className="index-bottom-wrapper">
                <div className='index-bottom'>
                    <div className='index-content'>
                        <h1 className="section-title">Biography</h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbiac ultricies orci. Pellentesque malesuadal lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbiac ultricies orci. Pellentesque malesuadal orem ipsum dolor sit amet, consectetur adipiscing elit. Morbiac ultricies orci. Pellentesque malesuadal orem ipsum dolor sit amet, consectetur adipiscing elit. Morbiac ultricies orci. Pellentesque malesuadal orem ipsum dolor sit amet, consectetur adipiscing elit. Morbiac ultricies orci. Pellentesque malesuadal orem ipsum dolor sit amet, consectetur adipiscing elit. Morbiac ultricies orci. Pellentesque malesuadal</p>
                    </div>
                </div>
                <div className="btn">
                    <button className='main-btn'>Continue</button>
                </div>
            </div>


        </div>
    );
};

export default Index;