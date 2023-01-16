import React from 'react';
import '../../CSS/style.css';

const Filter = () => {
    return (
        <div className='filter-body'>
            <h2 className='team-list-title'>Filter by</h2>

            <div className="box">
                <div className="slider">
                    <input type="range" min={0} max={100} value={10} />
                </div>
                <div className="value">
                    <p>0km</p>
                    <p>100km</p>
                </div>
            </div>

            <div className="radio-group">
                <label className='radio'>
                    <input type="radio" value="male" name='gender' />
                    Woman <span></span>
                </label>
                <label>
                    <input type="radio" value="male" name='gender' />
                    Man <span></span>
                </label>
                <label>
                    <input type="radio" value="male" name='gender' />
                    All <span></span>
                </label>
            </div>

        </div>
    );
};

export default Filter;