import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { MdArrowBackIos } from 'react-icons/md';
import '../../CSS/style.css';

const FovouriteList = () => {

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
        <div className='show-list-body'>
            <div className="noti-title-main">
                <MdArrowBackIos />
                <h1 className="noti-title">Favorite list</h1>
            </div>
            <button className='btn-tab ' onClick={() => setCat('all')}>Relation</button>
            <button className='btn-tab mr' onClick={() => setCat('all')}>Respect</button>
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

            {/* <div className="show-lists">
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
            </div> */}
        </div>
    );
};

export default FovouriteList;