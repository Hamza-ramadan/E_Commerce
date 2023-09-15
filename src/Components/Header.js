import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import img1 from '../images/compare.svg'
import img2 from '../images/wishlist.svg'
import img3 from '../images/user.svg'
import img4 from '../images/cart.svg'
import img5  from '../images/menu.svg'
import { useSelector } from 'react-redux'
import { Typewriter } from 'react-simple-typewriter'

const Header = ({setSategoryVal,categoryVal ,setitem , item }) => {
  const cart =useSelector(state => state.Cart)
  const total_price = cart.reduce((acc , product) => {
    acc+= +product.price * +product.quantity;
    return acc;
  } , 0)

  const products = useSelector((state) => state.Products);
  const menuitems = [...new Set(products.map((val) => val.category))]
  const filterItems =(cat) => {
    const newItems = products.filter((newVal) => newVal.category === cat);
    setitem(newItems);
    setSategoryVal(cat);
}
 const navref = useRef();
 const buttonref = useRef();
 const showNav = () =>{
    navref.current.classList.toggle("responsive-nav");
    buttonref.current.classList.toggle("responsive-button");
 }
  return (
    <div>
      <nav className="header-top-script py-3">
        <div className="container">
          <div className="row">
          <div className="col-6">
            <p className='text-white mb-0'>Free Shipping Over 100$ & Free Return </p>
          </div>
          <div className="col-6">
            <p className='text-end mb-0 text-white'>
              Hotline: <a className='text-white ' href="+20 111 758 5124">+20 111 758 5124</a>
            </p>
          </div>

          </div>
          
        </div>
      </nav>
      <header className='header-upper py-3 '>
      <div className="container">
        <div className='row align-items-center '>
          <div className='col-lg-2 col-md-5'>
            <h2 ><Link className='text-white'>Tango Store</Link></h2>
          </div>
          <div className='col-lg-5  col-md-7 text-center'>
          <span style={{ color: 'white', fontWeight: 'bold',fontSize: '28px' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Black Friday Discounts Up To 70% ." ,"","Offers And Discounts Every Day ."]}
            loop={40}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          /></span>
          </div>
          <div className='col-lg-5 col-md-12 justify-content-end'>
            <div className='header-upper-links d-flex justify-content-between align-items-center'>
              <div>
                <Link to="/compare_products" className='d-flex align-items-center gap-10 text-white'>
                <img src={img1} alt="Compare"/>
                <p className='mb-0'>Compare <br/>Products</p>
                </Link>
              </div>
              <div>
                <Link to="/Wishlist" className='d-flex align-items-center gap-10 text-white'>
                <img src={img2} alt="Wishlist"/>
                <p className='mb-0'>Favourite <br/>Wishlist </p>
                </Link>
              </div>
              <div>
                <Link  to="/Login" className='d-flex align-items-center gap-10 text-white'>
                <img src={img3} alt="user"/>
                <p className='mb-0'>Login <br/> My Acount</p>
                </Link>
              </div>
              <div>
                <Link to={"/ShopCar"} className='d-flex align-items-center gap-10 text-white'>
                <img src={img4} alt="cart"/>
                <div className='d-flex flex-column'>
                <div className='badge bg-white text-dark'>{cart.length}</div>
                <p className='mb-0'>${total_price}</p>
                </div>
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      </header>
      <header className="header-bottom py-3">
        <div className="container">
          <div className="row">
          <div className="col-12 menu-bottom d-flex justify-content-between align-items-center gap-30">
            <div>
              <div className="dropdown ">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={img5} className="px-2 "  alt=""/>
                <span className='me-5'>Shop Categories</span> 
              </button>
              <ul className="dropdown-menu  ">
              {menuitems.map((val)=> (
                <li key={val}><Link to={"/Ourstore"} className="dropdown-item" onClick={() => filterItems(val)}>{val}</Link></li>
              ))} 
                
              </ul>
              </div>
            </div>
            <div ref={navref} className="navinavi">
            <button className='btnclosenav' onClick={showNav}><i className="fa-solid fa-xmark"></i></button>

              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/Ourstore"}>Our Store</NavLink>
              <NavLink to={"/Blogs"}>Blogs</NavLink>
              <NavLink to={"/Contact"}>Contact</NavLink>
            </div>
            <div ref={buttonref} className="bar-icon">
              
              <button className='btnshownav' onClick={showNav}><i className="fa-solid fa-bars"></i></button>
            </div>
            
          </div>
          </div> 
        </div>
      </header>
        
    </div>
  )
}

export default Header