import React from 'react';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { IoIosNotifications } from 'react-icons/io';
import '../../CSS/style.css';
import account from '../../img/account.png';
import profile from '../../img/profile.png';
const MainProfile = () => {
    return (
        <div className='menu-wrapper '>

            <div className="menu-body">
                <div className="profile-info pt-44">
                    <div className="profile-img">
                        <img src={profile} alt="" />
                    </div>
                    <div className="pro-name-title">
                        <h2>Muhammad Umm</h2>
                        <p>muhammad.umm@gmail.com</p>
                    </div>
                </div>
                <div className="profile-list">
                    <a className='view lists' href="#"><img src={account} alt="" />View profile</a>
                    <a className='view lists' href="#"><IoIosNotifications />Notification</a>
                    <a className='view lists' href="#"><BsQuestionCircleFill />Help</a>


                </div>
                <div className="bottom-text">
                    <p>Terms I Investors</p>
                </div>
            </div>
        </div>
    );
};

export default MainProfile;