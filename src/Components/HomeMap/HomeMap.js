
import React from 'react';
import { GoSearch } from 'react-icons/go';
import '../../CSS/style.css';
import Bar from '../../img/bar.png';



const HomeMap = () => {
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
            <div className="show-list">
                <div className='border'></div>
                <a href=""> Show list </a>
            </div>
        </div>
    );
};

export default HomeMap;