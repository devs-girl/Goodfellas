import React from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import '../../CSS/style.css';
import NotiImg2 from '../../img/noti2.png';
import NotiImg1 from '../../img/profile1.png';


const Notifications = () => {
    return (
        <div className='notifications-wrapper'>
            <div className="noti-title-main">
                <MdArrowBackIos />
                <h1 className="noti-title">Notifications</h1>
            </div>
            {/*  */}
            <div className="single-noti">
                <div className="noti-wrapp">

                    <div className="noti-left">
                        <div className="noti-img">
                            <img src={NotiImg1} alt="" />
                        </div>

                        <div className="noti-text">
                            <p>Lucas Fernando Amorim respect you!</p>
                        </div>

                    </div>

                    <div className="noti-right">
                        <p>28/09</p>
                    </div>
                </div>
                <div className="noti-border"></div>
            </div>
            {/*  */}
            <div className="single-noti">
                <div className="noti-wrapp">

                    <div className="noti-left">
                        <div className="noti-img">
                            <img src={NotiImg2} alt="" />
                        </div>

                        <div className="noti-text">
                            <p>Lucas Fernando Amorim respect you!</p>
                            <button className='more-btn'>More</button>
                        </div>

                    </div>

                    <div className="noti-right">
                        <p>28/09</p>
                    </div>
                </div>
            </div>
            <div className="noti-border"></div>
            {/*  */}
            <div className="single-noti">
                <div className="noti-wrapp">

                    <div className="noti-left">
                        <div className="noti-img">
                            <img src={NotiImg1} alt="" />
                        </div>

                        <div className="noti-text">
                            <p>Lucas Fernando Amorim respect you!</p>
                            <button className='sm-btn mr-12'>Yes</button>
                            <button className='sm-btn'>No</button>
                        </div>

                    </div>

                    <div className="noti-right">
                        <p>28/09</p>
                    </div>
                </div>
            </div>
            <div className="noti-border"></div>

            {/*  */}
            <div className="single-noti">
                <div className="noti-wrapp">

                    <div className="noti-left">
                        <div className="noti-img">
                            <img src={NotiImg2} alt="" />
                        </div>

                        <div className="noti-text">
                            <p>Lucas Fernando Amorim respect you!</p>
                            <button className='more-btn'>More</button>
                        </div>

                    </div>

                    <div className="noti-right">
                        <p>28/09</p>
                    </div>
                </div>
            </div>
            <div className="noti-border"></div>




        </div>
    );
};

export default Notifications;