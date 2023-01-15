import React from 'react';
import { AiFillTwitterCircle, AiOutlineHeart, AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaSnapchat, FaTiktok } from 'react-icons/fa';
import '../../CSS/style.css';
import close from '../../img/close.png';
import component from '../../img/component.png';
import p1 from '../../img/p1.png';

const Profileds = () => {
    return (
        <div>
            <div className='view-profile'>
                <div className="vp-img">
                    <img src={p1} alt="" />
                    <img className='close' src={close} alt="" />
                    <AiOutlineHeart className='heart'></AiOutlineHeart>
                    <h2 className='vp-name'>Muhammad Umm <img className='compo' src={component} alt="" /></h2>

                </div>
                <div className="edit-button">
                    <button className='edit'>Desafiar</button>
                </div>
                <div className="vp-body">
                    <div className="content">
                        <p><span className='highlight'>Respect by</span> muha, _lfamorim, rodolfobjj, bjj_gru and <a className='highlight-flw' href="#">other 12 people</a></p>
                    </div>
                    <div className="content">
                        <p><span className='highlight'>Liked by</span> muha, _lfamorim, rodolfobjj, bjj_gru and <a className='highlight-flw' href="#">other 12 people</a></p>
                    </div>
                    <div className="content">
                        <h2>Practice time</h2>
                        <p>10 Years</p>
                    </div>
                    <div className="content">
                        <h2>Biography</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbiac ultricies orci. Pellentesque malesuada libero </p>
                    </div>
                    <div className="content">
                        <h2>Social media</h2>
                        <BsFacebook className='social-icon'></BsFacebook>
                        <AiOutlineInstagram className='social-icon'></AiOutlineInstagram>
                        <FaSnapchat className='social-icon'></FaSnapchat>
                        <FaTiktok className='social-icon'></FaTiktok>
                        <AiFillTwitterCircle className='social-icon'></AiFillTwitterCircle>
                    </div>
                    <div className="content">
                        <h2>Team & Gym</h2>
                        <p>Gracie Barra - Gracie Barra</p>
                    </div>
                    <div className="content">
                        <h2>Belt & Degrees </h2>
                        <p>Yellow - Orange</p>
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
        </div>
    );
};

export default Profileds;