import React from 'react';
import { AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaSnapchat, FaTiktok } from 'react-icons/fa';
import '../../CSS/style.css';
import close from '../../img/close.png';
import p1 from '../../img/p1.png';
const Profile = () => {
    return (
        <div className='view-profile'>
            <div className="vp-img">
                <img src={p1} alt="" />
                <img className='close' src={close} alt="" />
                <h2 className='vp-name'>Muhammad Umm</h2>
            </div>
            <div className="edit-button">
                <button className='edit'>Edit profile</button>
            </div>
            <div className="vp-body">
                <div className="content">
                    <h2>Practice time</h2>
                    <p>10 Years</p>
                </div>
                <div className="content">
                    <h2>Biography</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbiac ultricies orci. Pellentesque malesuada libero</p>
                </div>
                <div className="content">
                    <h2>Social media</h2>
                    <a href=""><BsFacebook className='social-icon'></BsFacebook></a>
                    <a href=""><AiOutlineInstagram className='social-icon'></AiOutlineInstagram></a>
                    <a href=""><FaSnapchat className='social-icon'></FaSnapchat></a>
                    <a href=""> <FaTiktok className='social-icon'></FaTiktok></a>
                    <a href=""><AiFillTwitterCircle className='social-icon'></AiFillTwitterCircle></a>




                </div>
                <div className="content">
                    <h2>Team</h2>
                    <p>Gracie Barra - <span className='res-color'>Responsavel</span></p>
                </div>
                <div className="content">
                    <h2>Gyme</h2>
                    <p>Gracie Barra - <span className='res-color'>Responsavel</span></p>
                </div>
                <div className="content">
                    <h2>Belt & Degrees</h2>
                    <p>Yellow - Orange</p>
                </div>
                <div className="content last">
                    <h2>Reference</h2>
                    <p>Followed by 16 of your friends</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;