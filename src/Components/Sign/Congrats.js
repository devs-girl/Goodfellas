import React from 'react';
import '../../CSS/style.css';

const Congrats = () => {
    return (
        <div className='signin-wrapper forgot-wrapp'>
            <div className="title">
                <h1 className='sign-title col-title'>Congrats!</h1>
            </div>
            <p className='forgot-title mb-10 '>Your account has been created. It’s time to make yours.</p>
            <div className="btn">
                <button className='main-btn mb-0'>Let’s go!</button>
            </div>

        </div>
    );
};

export default Congrats;