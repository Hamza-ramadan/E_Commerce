import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux'
import { deleteToCardcompare } from '../Redux TK/Reducers/CompareSlice';
import { addCart } from '../Redux TK/Reducers/CartSlice';
import { Link } from 'react-router-dom';

const CompareProducts = () => {
    const CartsCompare= useSelector(state => state.Compare);
    const dispatch = useDispatch();

    return (
    <>
        <BreadCrumb title="Compare-Products"/>

        <div className="compare-product-wraper py-5 home-wrapper-2">
        <div className="py-3">
        <div className="container">
                <div className="compare-boxs">
                    {CartsCompare.map((product) =>(
                        <div className="box-compare" key={product.id}>
                            <div className="team-icon">
                                <Link href="#" className="tot"><i className="fa-regular fa-eye"></i></Link>
                                <button ><i className="fa-solid fa-cart-plus" onClick={() => dispatch(addCart(product))}></i></button>
                            </div>
                            <div className="box-compare-img">
                            <button onClick={() => dispatch(deleteToCardcompare(product))}><i className="fa-regular fa-circle-xmark mistak"></i></button>
                                <img src={product.image} alt="" />
                            </div>
                            <div className="box-compare-desc">
                                <h5>{product.title}</h5>
                                <div className="description">
                                    <h6>Price:</h6>
                                    <span>{product.price}$</span>
                                </div>
                                <div className="description">
                                    <h6>Brand:</h6>
                                    <span>{product.brand}</span>
                                </div><div className="description">
                                    <h6>Type:</h6>
                                    <span>{product.category}</span>
                                </div><div className="description">
                                    <h6>Avsilsbility:</h6>
                                    <span>in Stock</span>
                                </div><div className="description">
                                    <h6>Color:</h6>
                                    <span style={{backgroundColor:` ${product.color}`}} className='spansss'></span>
                                </div><div className="description">
                                    <h6>Rate:</h6>
                                    <span>{product.rating.rate}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>

            
        </div>
    </>
  )
}

export default CompareProducts