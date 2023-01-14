import React from 'react';
import '../../CSS/style.css';
import Icon1 from '../../img/Btn apple@3x.png';
import Icon3 from '../../img/btn facebook@3x.png';
import Icon2 from '../../img/Btn google@3x.png';
import Icon4 from '../../img/Btn twitter@3x.png';
import OrSignIn from '../../img/or-signin.png';



const SignUp = () => {

    return (
        <div className='signin-wrapper'>
            <div className="title">
                <h1 className='sign-title'>Sign up</h1>
                <p>Already an user ? <span>Sign In</span></p>
            </div>
            <form action="#">

                <input type="text" placeholder='First name' />
                <input type="text" placeholder='Last name' />
                <input type="number" placeholder='Phone number' />
                <input type="text" placeholder='Username or e-mail' />

                <input className='' type="password" placeholder='Password' />
                <input className='' type="password" placeholder='Confirm your password' />
                {/* <p className='agree'>I agree to the Terms & Conditions and Privacy Policy</p> */}

                <div class="tacbox">
                    <input className='check-input mb-0' id="checkbox1" type="checkbox" />
                    <label className='agree' for="checkbox">I agree to the Terms & Conditions</label>
                    <p className='agree ml-15' for="checkbox"> and Privacy Policy</p>
                </div>
                <div className="btn">
                    <button className='main-btn'>Continue</button>
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

export default SignUp;