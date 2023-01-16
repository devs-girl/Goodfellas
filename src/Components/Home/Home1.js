
import React from 'react';
import { AiFillHome, AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import { MdFavoriteBorder } from 'react-icons/md';
import '../../CSS/style.css';
import Bar from '../../img/bar.png';
import NotiImg1 from '../../img/noti2.png';
import Profile1 from '../../img/profile1.png';
import Map from '../Map/Map';



const Home1 = () => {
    return (
        <div className="homemap-wrapper">
            <div className='hmap'>
                <div className="boxContainer">
                    <table className='elementsContainer'>
                        <tr>
                            <td>
                                <a href="">
                                    <GoSearch className='s-icon' />
                                </a>
                            </td>
                            <td>
                                <input type="text" placeholder='Team goodfellas' className='search' />
                            </td>

                        </tr>

                    </table>
                </div>

                <nav>
                    <label htmlFor="toggler"><img className='bar' src={Bar} alt="" /></label>
                    <input type="checkbox" id='toggler' name='' />


                    <div className="menu">
                        <ul><li><a href="#"></a>1</li></ul>
                        <ul><li><a href="#"></a>2</li></ul>
                        <ul><li><a href="#"></a>3</li></ul>
                        <ul><li><a href="#"></a>4</li></ul>
                    </div>
                </nav>
            </div>

            <p className="to">Close to you</p>
            <div className="home1-map">
                <Map />
            </div>

            <div className="rank">
                <h3>Your place in ranking</h3>
            </div>
            <div className="list-detail border-none">
                <div className="single-list">
                    <p className='nmbr'>18</p>
                    <img className='list-img' src={Profile1} alt="" />
                    <div className="list-info">
                        <p><span className='list-single-info'>Name: </span>Lucas Amorim</p>
                        <p><span className='list-single-info'>Belt: </span>White</p>
                        <p><span className='list-single-info'>Place: </span>Brazil</p>
                        <div className="list-icons">
                            <AiFillStar className='rating'></AiFillStar>
                            <AiFillStar className='rating'></AiFillStar>
                            <AiFillStar className='rating'></AiFillStar>
                            <AiFillStar className='rating2'></AiFillStar>
                            <AiFillStar className='rating2'></AiFillStar>
                        </div>
                    </div>
                </div>
                <div className="list-heart">
                    <AiOutlineHeart></AiOutlineHeart>
                </div>
            </div>
            <div className="rank">
                <h3>Ranking</h3>
            </div>
            <div className='show-list-body'>

                <div className="show-lists">
                    <ul>
                        <li>
                            <div className="list-detail">
                                <div className="single-list">
                                    <p className='nmbr'>1</p>
                                    <img className='list-img' src={Profile1} alt="" />
                                    <div className="list-info">
                                        <p><span className='list-single-info'>Name: </span>Lucas Amorim</p>
                                        <p><span className='list-single-info'>Belt: </span>White</p>
                                        <p><span className='list-single-info'>Place: </span>Brazil</p>
                                        <div className="list-icons">
                                            <AiFillStar className='rating'></AiFillStar>
                                            <AiFillStar className='rating'></AiFillStar>
                                            <AiFillStar className='rating'></AiFillStar>
                                            <AiFillStar className='rating2'></AiFillStar>
                                            <AiFillStar className='rating2'></AiFillStar>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-heart">
                                    <AiOutlineHeart></AiOutlineHeart>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="list-detail">
                                <div className="single-list">
                                    <p className='nmbr'>2</p>
                                    <img className='list-img' src={NotiImg1} alt="" />
                                    <div className="list-info">
                                        <p><span className='list-single-info'>Name: </span>Lucas Amorim</p>
                                        <p><span className='list-single-info'>Belt: </span>White</p>
                                        <p><span className='list-single-info'>Place: </span>Brazil</p>
                                        <div className="list-icons">
                                            <AiFillStar className='rating'></AiFillStar>
                                            <AiFillStar className='rating'></AiFillStar>
                                            <AiFillStar className='rating'></AiFillStar>
                                            <AiFillStar className='rating2'></AiFillStar>
                                            <AiFillStar className='rating2'></AiFillStar>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-heart">
                                    <AiOutlineHeart></AiOutlineHeart>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="list-detail">
                                <div className="single-list">
                                    <p className='nmbr'>3</p>
                                    <img className='list-img' src={Profile1} alt="" />
                                    <div className="list-info">
                                        <p><span className='list-single-info'>Name: </span>Lucas Amorim</p>
                                        <p><span className='list-single-info'>Belt: </span>White</p>
                                        <p><span className='list-single-info'>Place: </span>Brazil</p>
                                        <div className="list-icons">
                                            <AiFillStar className='rating'></AiFillStar>
                                            <AiFillStar className='rating'></AiFillStar>
                                            <AiFillStar className='rating'></AiFillStar>
                                            <AiFillStar className='rating2'></AiFillStar>
                                            <AiFillStar className='rating2'></AiFillStar>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-heart">
                                    <AiOutlineHeart></AiOutlineHeart>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="list-detail">
                                <div className="single-list">
                                    <p className='nmbr'>4</p>
                                    <img className='list-img' src={NotiImg1} alt="" />
                                    <div className="list-info">
                                        <p><span className='list-single-info'>Name: </span>Lucas Amorim</p>
                                        <p><span className='list-single-info'>Belt: </span>White</p>
                                        <p><span className='list-single-info'>Place: </span>Brazil</p>
                                        <div className="list-icons">
                                            <AiFillStar className='rating'></AiFillStar>
                                            <AiFillStar className='rating'></AiFillStar>
                                            <AiFillStar className='rating'></AiFillStar>
                                            <AiFillStar className='rating2'></AiFillStar>
                                            <AiFillStar className='rating2'></AiFillStar>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-heart">
                                    <AiOutlineHeart></AiOutlineHeart>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="list-detail">
                                <div className="single-list">
                                    <p className='nmbr'>5</p>
                                    <img className='list-img' src={Profile1} alt="" />
                                    <div className="list-info">
                                        <p><span className='list-single-info'>Name: </span>Lucas Amorim</p>
                                        <p><span className='list-single-info'>Belt: </span>White</p>
                                        <p><span className='list-single-info'>Place: </span>Brazil</p>
                                        <div className="list-icons">
                                            <AiFillStar className='rating'></AiFillStar>
                                            <AiFillStar className='rating'></AiFillStar>
                                            <AiFillStar className='rating'></AiFillStar>
                                            <AiFillStar className='rating2'></AiFillStar>
                                            <AiFillStar className='rating2'></AiFillStar>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-heart">
                                    <AiOutlineHeart></AiOutlineHeart>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="list-detail">
                                <div className="single-list">
                                    <p className='nmbr'>6</p>
                                    <img className='list-img' src={NotiImg1} alt="" />
                                    <div className="list-info">
                                        <p><span className='list-single-info'>Name: </span>Lucas Amorim</p>
                                        <p><span className='list-single-info'>Belt: </span>White</p>
                                        <p><span className='list-single-info'>Place: </span>Brazil</p>
                                        <div className="list-icons">
                                            <AiFillStar className='rating'></AiFillStar>
                                            <AiFillStar className='rating'></AiFillStar>
                                            <AiFillStar className='rating'></AiFillStar>
                                            <AiFillStar className='rating2'></AiFillStar>
                                            <AiFillStar className='rating2'></AiFillStar>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-heart">
                                    <AiOutlineHeart></AiOutlineHeart>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="bottom-icon">
                <div className="single-h-icon">
                    <a href=""><AiFillHome className='hom1-icon' /></a>
                    <p> Home</p>
                </div>
                <div className="single-h-icon">
                    <a href=""><MdFavoriteBorder className='hom1-icon' /></a>
                    <p> Favorite</p>
                </div>
                <div className="single-h-icon">
                    <a href=""><BsPerson className='hom1-icon' /></a>
                    <p>Account</p>
                </div>



            </div>

        </div>
    );
};

export default Home1;