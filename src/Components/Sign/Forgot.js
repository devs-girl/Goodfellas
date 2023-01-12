import React from 'react';
import '../../CSS/style.css';

const Forgot = () => {
    return (
        <div className='signin-wrapper forgot-wrapp'>
            <div className="title">
                <h1 className='sign-title col-title'>Forgot pass</h1>
            </div>
            <p className='forgot-title'>We will soon send a link to your registered email to reset your password.</p>
            <input type="text" placeholder='E-mail' />
            <div className="btn">
                <button className='main-btn mb-0'>Submit</button>
            </div>
            <span className='back'>Back to login</span>

        </div>
    );
};

export default Forgot;