import React from 'react';
import '../../CSS/style.css';
import StepImg1 from '../../img/step1.png';

const Step1 = () => {
    return (
        <div className='step-wrapper'>
            <div className="step">
                <img src={StepImg1} alt="" />
            </div>
            <h1 className='sign-title col-title mb-25'>First step</h1>
            <p className='step-title'>We will soon send a link to your registered email to reset your password.</p>

            <div className="circle-btn">
                <div className='bg'></div>
                <div></div>
                <div></div>
            </div>

            <div className="skip-next">
                <p>Skip</p>
                <span>Next</span>
            </div>
        </div>
    );
};

export default Step1;