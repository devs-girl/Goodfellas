import React from 'react';
import '../../CSS/style.css';
import LoadImg from '../../img/loder.png';

const Load = () => {
    return (
        <div className='load-area'>
            <img className='load-img' src={LoadImg} alt="" />

            <div class="loader-line"></div>
        </div>
    );
};

export default Load;