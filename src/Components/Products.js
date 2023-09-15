import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useDispatch} from 'react-redux'
import Stars from '../Components/Stars';
import { addCart } from '../Redux TK/Reducers/CartSlice';
// import { useState } from 'react';
import { addToCardcompare } from '../Redux TK/Reducers/CompareSlice';
import { addToCardwishlist } from '../Redux TK/Reducers/Wihlist';

const Products = ({searchFilter, grid ,product}) => {
    let location = useLocation();
    // const products = useSelector((state) => state.Products)
    const dispatch = useDispatch();
    // const [heart , setHeart] = useState(true);


// console.log(searchFilter);


    const [navigation , setNavigation] = useState(false);
    const [navigationcar , setNavigationCar] = useState(false);
    const addProNav = (product) =>{
        setNavigation(!navigation);
        setTimeout(() => {
            setNavigation(false)
        },2500)
        dispatch(addToCardwishlist(product))
    }

    const addProNavCAr = (product) =>{
        setNavigationCar(!navigationcar);
        setTimeout(() => {
            setNavigationCar(false)
        },2500)
        dispatch(addCart(product))
    }
  return (
    <>
    <div className=  {navigation ? "activebtn-navigation" : "btn-navigation"}>
    <h1><i className="fa-solid fa-check"></i>The product has been added to favourites ❤️. </h1>
    </div>
    <div className=  {navigationcar ? "activebtn-navigation" : "btn-navigation"}>
    <h1><i className="fa-solid fa-check"></i>The product has been added to the cart &#x1F618; . </h1>
    </div>
    {/* {navigation && <h1 className='btn-navigation'>sendahfadf;okadf;ldflpasdfl</h1>} */}
    
    {product.filter((item)=>{
        return searchFilter.toLowerCase() === ''? item : item.title.toLowerCase().includes(searchFilter);
    }).map((product ) => 
        <div key={product.id} className={`${location.pathname === "/Ourstore" ? `gr-${grid} mb-0 ` :"col-3"}`}>
            <div className='blog-cart'>
                {/* {heart ?<button onClick={() => setHeart(false)}  className='iconheart'><i  className="fa-regular fa-heart "></i></button>
                :<button onClick={() => setHeart(true)} className='iconheart'><i className="fa-solid fa-heart iconheartss "></i></button>} */}
                <button className='iconheart' onClick={() => addProNav(product)}><i  className="fa-regular fa-heart "></i></button>
                <div className="team-icon">
                        <Link to={`/product-details/${product.id}`} className="tot"><i className="fa-regular fa-eye"></i></Link>
                        <button ><i className="fa-solid fa-cart-plus" onClick={() => addProNavCAr(product) }></i></button>
                        <button ><i onClick={() => dispatch(addToCardcompare(product))} className="fa-solid fa-code-compare fa-spin"></i></button>
                    </div>
                <div className='blog-img' >
                    <img src={product.image} className='img-fluid' alt="blog"/>
                </div>
                <div className='blog-content' >
                    <h6 className='title'>{product.title.slice(0 ,40)}......</h6>
                    <p className='desc'>{product.description.slice(0 ,60)}......</p>
                    <Stars stars={product.rating.rate}/>
                    <h3>{product.price}$</h3>
                </div>
            </div>
    </div>
    )}

    {/* <div className={`${location.pathname === "/Ourstore" ? `col-${props.grid} mb-2` :"col-3"}`}>
        <div className='blog-cart'>
            <div className='blog-img' >
                <img src={props.imagee}  className='img-fluid' alt="blog"/>
            </div>
            <div className='blog-content' >
                <h6 className='title'>assssss</h6>
                <h5 className='texxt'>{props.texxt}</h5>
                <p className='desc'>
                Smile! why? Because the smile makes you beautiful, because
                            it reduces your stress, and because it helps you stay positive</p> */}
                {/* <Link to="/" className='button'>Read More</Link> */}
                {/* <h3>500$</h3>
            </div>
        </div>
    </div> */}
    </>
)
}

export default Products