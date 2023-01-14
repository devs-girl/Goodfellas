import React from 'react';
import '../../CSS/style.css';
import StepImg3 from '../../img/step3.png';

const Step3 = () => {
    return (
        <div className='step-wrapper'>
            <div className="step">
                <img src={StepImg3} alt="" />
            </div>
            <h1 className='sign-title col-title mb-25'>Third step</h1>
            <p className='step-title'>We will soon send a link to your registered email to reset your password.</p>

            <div className="circle-btn">
                <div></div>
                <div></div>
                <div className='bg'></div>
            </div>

            <div className="skip-next">
                <p>Skip</p>
                <span>Next</span>
            </div>

        </div>
    );
};

export default Step3;