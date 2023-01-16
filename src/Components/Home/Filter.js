import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import '../../CSS/style.css';

const Filter = () => {
    return (
        <div className='filter-body'>

            <div className="filter-wrapper">
                <h2 className='team-list-title'>Filter by</h2>
                <div className="radio-body">
                    <p>Gender</p>
                    <div className="radio-group">
                        <label className='radio'>
                            <input type="radio" value="male" name='gender' />
                            Woman <span></span>
                        </label>
                        <label className='radio'>
                            <input type="radio" value="male" name='gender' />
                            Man <span></span>
                        </label>
                        <label className='radio'>
                            <input type="radio" value="male" name='gender' />
                            All <span></span>
                        </label>
                    </div>
                </div>

                <div className="rng-slider">
                    <div className="rng-title">
                        <p>Proximity</p>
                        <span className='rng-title-tiny'>Up to 10 km away</span>
                    </div>
                    <div className="box">
                        <div className="slider">
                            <input type="range" min={0} max={100} />
                        </div>
                        <div className="value">
                            <p className='rng-title-tiny'>0km</p>
                            <p className='rng-title-tiny'>100km</p>
                        </div>
                    </div>
                </div>
                <div className="rng-slider">
                    <div className="rng-title">
                        <p>Belt</p>
                    </div>
                    <div className="box">
                        <div className="slider">
                            <input type="range" min={0} max={100} />
                        </div>
                        <div className="">
                            <p className='rng-title-tiny'>White</p>
                        </div>
                    </div>
                </div>

                <div className="rng-slider">
                    <div className="rng-title">
                        <p>Rating</p>
                    </div>
                    <div className="list-icons">
                        <AiFillStar className='rating-color'></AiFillStar>
                        <AiFillStar className='rating-color'></AiFillStar>
                        <AiFillStar className='rating2'></AiFillStar>
                        <AiFillStar className='rating2'></AiFillStar>
                        <AiFillStar className='rating2'></AiFillStar>
                    </div>
                </div>


                <div className="rng-slider">
                    <div className="rng-title">
                        <p>Community Relationship</p>
                    </div>
                    <div className="box">
                        <div className="slider">
                            <input type="range" min={0} max={100} />
                        </div>
                        <div className="value">
                            <p className='rng-title-tiny'>Unknown</p>
                            <p className='rng-title-tiny'>Associated</p>
                            <p className='rng-title-tiny'>Near</p>
                        </div>
                    </div>
                </div>


                <div className="radio-body">
                    <p>Filter by team, gym, fighter</p>
                    <div className="radio-group">
                        <label className='radio'>
                            <input type="radio" value="male" name='gender' />
                            Team <span></span>
                        </label>
                        <label className='radio'>
                            <input type="radio" value="male" name='gender' />
                            Gym <span></span>
                        </label>
                        <label className='radio'>
                            <input type="radio" value="male" name='gender' />
                            Fighter <span></span>
                        </label>
                        <label className='radio'>
                            <input type="radio" value="male" name='gender' />
                            All <span></span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="btn pt-17">
                <button className='main-btn'>Continue</button>
            </div>

            <div><a href="" className='rng-title-tiny clean'>Clean filter</a></div>
        </div>
    );
};

export default Filter;