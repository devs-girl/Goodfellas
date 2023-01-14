import React from 'react';
import '../../CSS/style.css';
import StepImg2 from '../../img/step2.png';

const Step2 = () => {
    return (
        <div className='step-wrapper'>
            <div className="step">
                <img src={StepImg2} alt="" />
            </div>
            <h1 className='sign-title col-title mb-25'>Second step</h1>
            <p className='step-title'>We will soon send a link to your registered email to reset your password.</p>

            <div className="circle-btn">
                <div></div>
                <div className='bg'></div>
                <div></div>
            </div>

            <div className="skip-next">
                <p>Skip</p>
                <span>Next</span>
            </div>
        </div>
    );
};

export default Step2;