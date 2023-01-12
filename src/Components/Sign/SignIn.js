import React from 'react';
import '../../CSS/style.css';
import Icon1 from '../../img/Btn apple@3x.png';
import Icon3 from '../../img/btn facebook@3x.png';
import Icon2 from '../../img/Btn google@3x.png';
import Icon4 from '../../img/Btn twitter@3x.png';
import OrSignIn from '../../img/or-signin.png';
const SignIn = () => {
    return (
        <div className='signin-wrapper'>
            <div className="title">
                <h1 className='sign-title'>Sign In</h1>
                <p>Don’t have an account ? <span>Sign up</span></p>
            </div>
            <form action="#">

                <input type="text" placeholder='Username or e-mail' />
                <input className='mb-0' type="password" placeholder='Password' />
                <p className='forgot'>Forgot password?</p>
                <div className="btn">
                    <button className='main-btn'>Enter</button>
                </div>
                <img className='or' src={OrSignIn} alt="" />
                <div className="icon">
                    <a href="#"><img src={Icon1} alt="" /></a>
                    <a href="#"><img src={Icon2} alt="" /></a>
                    <a href="#"><img src={Icon3} alt="" /></a>
                    <a href="#"><img src={Icon4} alt="" /></a>
                </div>
            </form>




        </div>
    );
};

export default SignIn;