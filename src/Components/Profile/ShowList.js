import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import '../../CSS/style.css';

const ShowList = () => {

    const [cat, setCat] = useState('all');

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('./info.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products);

    const productFilter = products.filter(product => product.catagory.includes(cat));
    return (
        <div className='show-list-body pt-60'>
            <div className="on-button">
                <button className='btn-tab ' onClick={() => setCat('all')}>Teams</button>
                <button className='btn-tab mr' onClick={() => setCat('all')}>Fighters</button>
                <button className='btn-tab mr' onClick={() => setCat('all')}>Gym</button>

            </div>
            <div className="pt-44">
                {
                    productFilter.map(product => <div className="show-lists">
                        <ul>
                            <li>
                                <div className="list-detail">
                                    <div className="single-list">
                                        <p className='nmbr'>{product.id}</p>
                                        <img className='list-img' src={product.img} alt="" />
                                        <div className="list-info">
                                            <p><span className='list-single-info'>Name: </span>{product.name}</p>
                                            <p><span className='list-single-info'>Belt: </span>{product.belt}</p>
                                            <p><span className='list-single-info'>Place: </span>{product.place}</p>
                                            <div className="list-icons">
                                                <AiFillStar className='rating'></AiFillStar>
                                                <AiFillStar className='rating'></AiFillStar>
                                                <AiFillStar className='rating'></AiFillStar>
                                                <AiFillStar className='rating2'></AiFillStar>
                                                <AiFillStar className='rating2'></AiFillStar>
                                            </div>
                                        </div>
                                    </div>
                                    <img className='list-heart' src={product.favorite} alt="" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default ShowList;