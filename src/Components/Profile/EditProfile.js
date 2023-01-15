import React from 'react';
import { AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaSnapchat, FaTiktok } from 'react-icons/fa';
import { ImPencil } from 'react-icons/im';
import { MdArrowBackIos } from 'react-icons/md';
import '../../CSS/style.css';
import profile from '../../img/profile.png';
const EditProfile = () => {
    return (
        <div className='view-profile'>
            <div className="fl">
                <MdArrowBackIos />
                <h1 className="edit-title">Edit profile</h1>
                <h1 className="save">Save</h1>
            </div>
            <div className="profile-info pt-0">
                <div className="profile-img">
                    <img src={profile} alt="" />
                    <p>Edit</p>
                    <a href="#"></a>
                </div>
                <div className="pro-name-title">
                    <h2>Muhammad Umm</h2>
                    <p>muhammad.umm@gmail.com</p>
                </div>
                <div className="ed">
                    <ImPencil className='Impencil' />
                </div>
            </div>
            <div className="vp-body">
                <div className="sn-content">
                    <div className="content">
                        <h2>Practice time</h2>
                        <p>10 Years</p>
                    </div>
                    <div className="ed">
                        <ImPencil className='Impencil' />
                    </div>
                </div>

                <div className="sn-content">
                    <div className="content">
                        <h2>Biography</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbiac ultricies orci. Pellentesque malesuada libero</p>
                    </div>
                    <div className="ed">
                        <ImPencil className='Impencil' />
                    </div>
                </div>

                <div className="content">
                    <h2>Social media</h2>
                    <a href=""><BsFacebook className='social-icon'></BsFacebook></a>
                    <a href=""><AiOutlineInstagram className='social-icon'></AiOutlineInstagram></a>
                    <a href=""><FaSnapchat className='social-icon'></FaSnapchat></a>
                    <a href=""> <FaTiktok className='social-icon'></FaTiktok></a>
                    <a href=""><AiFillTwitterCircle className='social-icon'></AiFillTwitterCircle></a>

                </div>

                <div className="sn-content">
                    <div className="content">
                        <h2>Team</h2>
                        <p>Gracie Barra - <span className='res-color'>Responsavel</span></p>
                    </div>
                    <div className="ed">
                        <ImPencil className='Impencil' />
                    </div>
                </div>

                <div className="sn-content">
                    <div className="content">
                        <h2>Gyme</h2>
                        <p>Gracie Barra - <span className='res-color'>Responsavel</span></p>
                    </div>
                    <div className="ed">
                        <ImPencil className='Impencil' />
                    </div>

                </div>
                <div className="sn-content">
                    <div className="content">
                        <h2>Belt & Degrees</h2>
                        <p>Yellow - Orange</p>
                    </div>
                    <div className="ed">
                        <ImPencil className='Impencil' />
                    </div>
                </div>

                <div className="sn-content">
                    <div className="content last">
                        <h2>Reference</h2>
                        <p>Followed by 16 of your friends</p>
                    </div>
                    <div className="ed">
                        <ImPencil className='Impencil' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;