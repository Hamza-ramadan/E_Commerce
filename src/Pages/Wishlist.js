import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux'
import { deleteToCardwishlist } from '../Redux TK/Reducers/Wihlist';
import { Link } from 'react-router-dom';
import { addCart } from '../Redux TK/Reducers/CartSlice';
import { addToCardcompare } from '../Redux TK/Reducers/CompareSlice';

const Wishlist = () => {
    const CartsWishlist= useSelector(state => state.Wishlist);
    const dispatch = useDispatch();
  return (
    <>
        <BreadCrumb title="Wishlist-Products"/>
        <div className="compare-product-wraper py-5 home-wrapper-2">
            <div className="py-3">
            <div className="container">
                <div className="compare-boxs">
                    {CartsWishlist.map((product) =>(
                        <div className="box-compare" key={product.id}>
                        <div className="team-icon">
                            <Link href="#" className="tot"><i className="fa-regular fa-eye"></i></Link>
                            <button ><i className="fa-solid fa-cart-plus" onClick={() => dispatch(addCart(product))}></i></button>
                        <button ><i onClick={() => dispatch(addToCardcompare(product))} className="fa-solid fa-code-compare fa-spin"></i></button>

                        </div>
                            <div className="box-compare-img">
                            <button onClick={() => dispatch(deleteToCardwishlist(product))}><i className="fa-regular fa-circle-xmark mistak"></i></button>

                                <img src={product.image} alt="" />
                            </div>
                            <div className="box-compare-desc">
                                <h5>{product.title.slice(0,60)}...</h5>
                                <div className="description">
                                    <h6>Price:</h6>
                                    <span>{product.price}$</span>
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

export default Wishlist;