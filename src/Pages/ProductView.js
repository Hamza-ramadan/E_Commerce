import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb';
import visa_1 from "../images/Visa/vis-1.jpg.png"
import visa_2 from "../images/Visa/visa-2.jpg"
import visa_3 from "../images/Visa/visa-3.jpg"
import visa_4 from "../images/Visa/vis-4.jpg"
import visa_5 from "../images/Visa/visa-5.jpg"
import visa_6 from "../images/Visa/visa-6.jpg"

import Stars from '../Components/Stars';

import { addCart } from '../Redux TK/Reducers/CartSlice';
import { addToCardcompare } from '../Redux TK/Reducers/CompareSlice';
import { addToCardwishlist } from '../Redux TK/Reducers/Wihlist';
import Popup from '../Components/Popup';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { useState } from 'react';

const ProductView = () => {
    const products = useSelector((state) => state.Products)
        const {id} = useParams();
        const productview = products.find(f => f.id == id)
        const image =productview.image
        const dispatch = useDispatch();
        
        const [navigationcar , setNavigationCar] = useState(false);

        const addProNavCAr = (product) =>{
            setNavigationCar(!navigationcar);
            setTimeout(() => {
                setNavigationCar(false)
            },2500)
            dispatch(addCart(product))
        }

  return (
    <>
    <div className=  {navigationcar ? "activebtn-navigation" : "btn-navigation"}>
    <h1><i className="fa-solid fa-check"></i>The product has been added to the cart &#x1F618; . </h1>
    </div>
        <BreadCrumb title={`${productview.title.slice(0 , 22) } ........`}/>
        <div className="productView-wrapper py-5 home-wrapper-2">
            <div className="container bg-white py-3 px-2">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="main-imge">
                        <TransformWrapper>
                            <TransformComponent>
                                <img src={image} className='img-fluid' alt="test" />
                            </TransformComponent>
                        </TransformWrapper>
                        
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="product-info">
                            <div className="box-info d-flex">
                                <h5>{productview.title} .</h5>
                            </div>
                            <div className="box-info d-flex">
                                <h6>Price:</h6>
                                <span>{productview.price}$.</span>
                            </div>
                            <div className="box-info d-flex">
                                <h6>Rating:</h6>
                                <Stars stars={productview.rating.rate}/>
                                <h2>({productview.rating.count} Reivews).</h2>
                            </div>
                            <div className="box-info">
                                <h6>Description:</h6>
                                <span>{productview.description}.</span>
                            </div>
                            <div className="box-info d-flex">
                                <h6>Category:</h6>
                                <span>{productview.category}.</span>
                            </div>
                            <div className="box-info d-flex">
                                <h6>Brand:</h6>
                                <span>{productview.brand}.</span>
                            </div>
                            <div className="box-info d-flex">
                                <h6>Color:</h6>
                                <p style={ {backgroundColor: `${productview.color}`}} ></p>
                            </div>
                            <div className="box-infoo box-info-btn d-flex">
                                <button onClick={() => addProNavCAr(productview)}>ADD TO CART</button>
                                <Popup pricee={productview.price} titleBtn={"Buy It Now"}/>
                            </div>
                            <div className="box-info box-info-buttn d-flex">
                                <button onClick={() => dispatch(addToCardwishlist(productview))}><i  className="fa-regular fa-heart "></i>Add to Wishlist</button>   
                                <button onClick={() => dispatch(addToCardcompare(productview))}><i className="fa-solid fa-code-compare"></i>Add to compare</button>
                            </div>
                            <div className="box-pay ">
                                <h3>Payment Methoud:</h3>
                                <div className="images">
                                    <img src={visa_1} alt="" />
                                    <img src={visa_2} alt="" />
                                    <img src={visa_3} alt="" />
                                    <img src={visa_4} alt="" />
                                    <img src={visa_5} alt="" />
                                    <img src={visa_6} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default ProductView