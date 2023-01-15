import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { MdArrowBackIos } from 'react-icons/md';
import '../../CSS/style.css';

const AllProfile = () => {

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
        <div className='allprofile-body'>
            <div className="noti-title-main">
                <MdArrowBackIos className='pl-10' />
                <h1 className="allprofile-title">Profile</h1>
            </div>
            <button className='btn-tab-border' onClick={() => setCat('all')}>Respect by   </button>
            <button className='btn-tab-border' onClick={() => setCat('all')}>Like</button>
            <button className='btn-tab-border' onClick={() => setCat('all')}>Liked by</button>
            <button className='btn-tab-border' onClick={() => setCat('all')}>In common</button>
            {/* <button onClick={() => setCat('hospitalutility')}>Respect</button> */}

            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-1 g-4">
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

export default AllProfile;