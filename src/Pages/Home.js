import React from 'react'
import img_1 from "../images/main-banner-1.jpg"
import img_2 from "../images/main-banner.jpg"
import img_3 from "../images/catbanner-01.jpg"
import img_5 from "../images/catbanner-02.jpg"
import img_4 from "../images/catbanner-03.jpg"
import img_6 from "../images/catbanner-04.jpg"
import imgs_1 from "../images/service.png"
import imgs_2 from "../images/service-02.png"
import imgs_3 from "../images/service-03.png"
import imgs_4 from "../images/service-04.png"
import imgs_5 from "../images/service-05.png"
import catimg_1 from "../images/camera.jpg"
import catimg_2 from "../images/tv.jpg"
import catimg_3 from "../images/smartwatch.png"
import catimg_4 from "../images/ball.png"
import catimg_5 from "../images/laptop.jpg"
import catimg_6 from "../images/phone.png"
import catimg_7 from "../images/headphone.jpg"
import catimg_8 from "../images/acc.jpg"
import catimg_9 from "../images/speaker.jpg"
import catimg_10 from "../images/homeapp.jpg"
import marquee_1 from "../images/brand-01.png"
import marquee_2 from "../images/brand-02.png"
import marquee_3 from "../images/brand-03.png"
import marquee_4 from "../images/brand-04.png"
import marquee_5 from "../images/brand-05.png"
import marquee_6 from "../images/brand-06.png"
import marquee_7 from "../images/brand-07.png"
import marquee_8 from "../images/brand-08.png"
import blog_1 from "../images/blog-1.jpg"
import blog_2 from "../images/blog3.jpg"
import blog_3 from "../images/blog2.jpg"
import blog_4 from "../images/blog4.jpg"
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import Blog from '../Components/Blog'
import{ Swiper ,SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import famous_watch from "../images/watchwater.png"
import famous_phone from "../images/iphone6.png"
import famous_hedphone from "../images/sound.png"
import famous_lap from "../images/laptop.png"
import { Navigation, Pagination, Scrollbar, A11y,  } from 'swiper/modules';
import { useSelector } from 'react-redux'
import Stars from '../Components/Stars'
const Home =  ({setSategoryVal,categoryVal ,setitem , item }) => {
  const products = useSelector((state) => state.Products);
    const newItems = products.filter((newVal) => newVal.rating.rate > 4);
    const gameItems = products.filter((newVal) => newVal.category === "Games");
    const smartTvItems = products.filter((newVal) => newVal.category === "Smart Tv");
    const HomeApplicationItems = products.filter((newVal) => newVal.category === "Home Application");
    const CameraItems = products.filter((newVal) => newVal.category === "Camera");
    const SmarwatchItems = products.filter((newVal) => newVal.category === "Smarwatch");
    const AccessoriesItems = products.filter((newVal) => newVal.category === "Accessories");
    const HeadphonesItems = products.filter((newVal) => newVal.category === "Headphones");
    const IpadsItems = products.filter((newVal) => newVal.category === "iPad");
    const LaptopItems = products.filter((newVal) => newVal.category === "Laptop");
    const ProtableSpeakerItems = products.filter((newVal) => newVal.category === "Protable Speaker");
    const filterItems =(cat ) => {
      const newItems = products.filter((newVal) => newVal.category === cat);
      console.log(newItems);
      setitem(newItems);
      setSategoryVal(cat);
      scrollUp();
    }
    
    const scrollUp = () => {
      window.scrollTo({
          top:0,
           behavior:"smooth"
      })
  }
  return (
    <>

      <section className='home-wrapper-1 py-5 ' data-aos="flip-up">
        <div className='container'>
          <div className='row d-flex flex-wrap'>
            <div className='col-xl-6 col-12'>
            <div id="carouselExampleCaptions" className="carousel slide main-banner position-relative p-2">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={img_1} className="d-block w-100 " alt="..."/>
                  <div className="main-banner-content position-absolute ">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>from $999.00 or $41.62/mo.</p>
                    <p className='suiiii'>for 24 mo.Footnote.</p>
                    <Link to={"/Ourstore"} className='button'>BUY NOW</Link>
                  </div>
                </div>
                
                <div className="carousel-item">
                  <img src={img_2} className="d-block w-100" alt="..."/>
                  <div className="  main-banner-content position-absolute ">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>Special Sale..</h5>
                    <p>from $999.00 or $41.62/mo.</p>
                    <p className='suiiii'>for 24 mo.Footnote.</p>
                    <Link to={"/Ourstore"} className='button'>BUY NOW</Link>
                  </div>
                </div>
              </div>
              
          </div>
              
            </div>
            
            <div className='col-xl-6 col-12'>
              <div className='ssssssssss'>
              <Link onClick={() => filterItems("Laptop")}  to={"/Ourstore"} className='small-banner position-relative p-1'>
                <img className='img-fluid rounded-3' src={img_3} alt=""/>
                <div className='main-banner-content position-absolute'>
                <h4>Best Sale.</h4>
                  <h5>Laptop Max.</h5>
                  <p>from $999.00 or $41.62/mo. <br/> for 24 mo.Footnote.</p>
                  
                </div>
              </Link>
                <Link onClick={() => filterItems("iPad")}  to={"/Ourstore"} className='small-banner position-relative p-1'>
                <img className='img-fluid rounded-3' src={img_4} alt=""/>
                <div className='main-banner-content position-absolute'>
                  <h4>Best Sale.</h4>
                  <h5>Buy IPad Air.</h5>
                  <p>from $999.00 or<br/> $49.62/mo.</p>
                </div>
                </Link>
                <Link onClick={() => filterItems("Smarwatch")}  to={"/Ourstore"} className='small-banner position-relative p-1'>
                <img className='img-fluid rounded-3' src={img_5} alt=""/>
                <div className='main-banner-content position-absolute'>
                  <h4>15% OFF.</h4>
                  <h5>Smartwatch7.</h5>
                  <p>Shop the latest band <br/> styles and color </p>
                </div>
                </Link>
                <Link  onClick={() => filterItems("Headphones")}  to={"/Ourstore"} className='small-banner position-relative p-1'>
                <img className='img-fluid rounded-3' src={img_6} alt=""/>
                <div className='main-banner-content position-absolute'>
                  <h4>FREE ENGRAVING.</h4>
                  <h5>AirPods Max.</h5>
                  <p>High-fidelity Playback & <br/> Ultra-low distortion.</p>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5 '>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='services '>
                <div className='d-flex align-items-center'>
                  <img src={imgs_1} alt="servcies"/>
                  <div>
                    <h6>Free shipping</h6>
                    <p className='mb-0'>from all orders over $100</p>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <img src={imgs_2} alt="servcies"/>
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save Up to 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <img src={imgs_3} alt="servcies"/>
                  <div>
                    <h6>Support 24/7</h6>
                    <p  className='mb-0'>Shop With an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <img src={imgs_4} alt="servcies"/>
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory direct price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <img src={imgs_5} alt="servcies"/>
                  <div>
                    <h6>Secure Payment</h6>
                    <p className='mb-0'>100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5 '>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories py-5'>
                <div className=' box '>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>{gameItems.length} Items</p>
                  </div>
                  <Link onClick={() => filterItems("Games")} id='Games' to={"/Ourstore"}><img className='categories-img' src={catimg_4} alt="Cameras"/></Link>
                </div>
                <div className=' box '>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>{smartTvItems.length} Items</p>
                  </div>
                  
                  <Link onClick={() => filterItems("Smart Tv")} id='Games' to={"/Ourstore"}><img src={catimg_2} alt="Cameras"/></Link>
                </div>
                <div className=' box '>
                  <div>
                    <h6>Smart Watch</h6>
                    <p>{SmarwatchItems.length} Items</p>
                  </div>
                  <Link onClick={() => filterItems("Smarwatch")} id='Games' to={"/Ourstore"}><img className='categories-img' src={catimg_3} alt="Cameras"/></Link>

                </div>
                <div className='box'>
                  <div>
                    <h6>Cameras</h6>
                    <p>{CameraItems.length} Items</p>
                  </div>
                  <Link onClick={() => filterItems("Camera")} id='Games' to={"/Ourstore"}><img src={catimg_1} alt="Cameras"/></Link>
                </div>
                <div className='box '>
                  <div>
                    <h6>laptop & computer</h6>
                    <p>{LaptopItems.length} Items</p>
                  </div>
                  <Link onClick={() => filterItems("Laptop")} id='Games' to={"/Ourstore"}><img className='categories-img' src={catimg_5} alt="Cameras"/></Link>
                </div>
                <div className='box'>
                  <div>
                    <h6>Mobile & Tablets</h6>
                    <p>{IpadsItems.length} Items</p>
                  </div>
                  <Link onClick={() => filterItems("iPad")} id='Games' to={"/Ourstore"}><img className='categories-img' src={catimg_6} alt="Cameras"/></Link>
                </div>
                <div className='box'>
                  <div>
                    <h6>Accessories</h6>
                    <p>{AccessoriesItems.length} Items</p>
                  </div>
                  <Link onClick={() => filterItems("Accessories")} id='Games' to={"/Ourstore"}><img src={catimg_8} alt="Cameras"/></Link>
                </div>
                <div className='box'>
                  <div>
                    <h6>Headphone</h6>
                    <p>{HeadphonesItems.length} Items</p>
                  </div>
                  <Link onClick={() => filterItems("Headphones")} id='Games' to={"/Ourstore"}><img src={catimg_7} alt="Cameras"/></Link>

                </div>
                <div className='box '>
                  <div>
                    <h6>Protable Speaker</h6>
                    <p>{ProtableSpeakerItems.length} Items</p>
                  </div>
                  <Link onClick={() => filterItems("Protable Speaker")} id='Games' to={"/Ourstore"}><img src={catimg_9} alt="Cameras"/></Link>
                </div>
                <div className='box '>
                  <div>
                    <h6>Home Application</h6>
                    <p>{HomeApplicationItems.length} Items</p>
                  </div>
                  <Link onClick={() => filterItems("Home Application")} id='Games' to={"/Ourstore"}><img src={catimg_10} alt="Cameras"/></Link>

                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <section className='featured-wrapper-4 py-5 home-wrapper-2' data-aos="fade-up">
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='Section-heading'>Featured Collection:</h3>
            </div>

            <Swiper
      
             modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      navigation
      pagination={{ clickable: true }}
      className='myswiber'
      breakpoints={
        {
          0:{
            slidesPerView:1,
            spaceBetween:5,

          },
          480:{
            slidesPerView:2,
            spaceBetween:10,

          },
          1024:{
            slidesPerView:4,
            spaceBetween:15,

          },
          1260:{
            slidesPerView:5,
            spaceBetween:15,

          }
        }
      }
      >
                    <div className='featured-boxs'>

                {newItems.map((pro) =>
                <SwiperSlide key={pro.id} >
                  <div className="featured-box">
                        <div className="featured-box-img">
                          <img src={pro.image} alt="" />
                        </div>
                        <div className="featured-box-desc">
                          <h5>{pro.title.slice(0 , 15)}..</h5>
                          <h4>{pro.price}$</h4>
                          <p>{pro.description.slice(0 , 55)}...</p>
                          <Stars stars={pro.rating.rate}/>
                          <div className="featured-buttons mt-2">
                            <Link onClick={scrollUp} to={"/Ourstore"}>Go To Store</Link>
                            <Link to={`/product-details/${pro.id}`} className='mb-3'>View Product</Link>
                          </div>
                        </div>
                    </div>
                </SwiperSlide>
                )}  
                    </div>

            </Swiper>
            
          </div>
          </div>
      </section>
      <section className='famous-wrapper py-5 home-wrapper-2 '>
        <div className='container'>
          <div className='famous-boxs'>
            <div className='famous-box  bg-dark'  data-aos="flip-left">
              <h5 className='text-white'>BIG SCREEN</h5>
              <h3 className='text-white'>Smart Watch Series 7</h3>
              <p>from 999$ or $16.95/mo or $24/mo </p>
              <img src={famous_watch} className='img-fluid'  alt=""/>
          </div>
          <div className='famous-box  ' data-aos="flip-left" >
              <h5>STUDIO DISPLAY</h5>
              <h3>600 nits of brightness</h3>
              <p>27 inch 5k Retina display</p>
              <img className='klk' src={famous_lap} alt=""/>
          </div>
          <div className='famous-box ' data-aos="flip-left">
              <h5>SMARTPHONES</h5>
              <h3>SmartPhone 13 Pro</h3>
              <p>Now nin Red, From $999.00 or $41.62/mo for 24mo Footnote* </p>
              <img src={famous_phone} alt=""/>
          </div>
          <div className='famous-box ' data-aos="flip-left">
              <h5>HOME SPEAKER</h5>
              <h3>Room-filling sound</h3>
              <p>from 31$ or $16.95/mo or $12/mo* </p>
              <img src={famous_hedphone} alt=""/>
          </div>
          </div>
        </div>
      </section> 
      <section className='marquee-wrapper-3 py-5 '>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper  bg-white'>
              <Marquee>
                <div className='px-4'><img src={marquee_1} alt=""/></div>
                <div className='px-4'><img src={marquee_2} alt=""/></div>
                <div className='px-4'><img src={marquee_3} alt=""/></div>
                <div className='px-4'><img src={marquee_4} alt=""/></div>
                <div className='px-4'><img src={marquee_5} alt=""/></div>
                <div className='px-4'><img src={marquee_6} alt=""/></div>
                <div className='px-4'><img src={marquee_7} alt=""/></div>
                <div className='px-4'><img src={marquee_8} alt=""/></div>
              </Marquee>  
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper-4 py-5 home-wrapper-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='Section-heading'>Our Latest Blogs:</h3>
            </div>
            <div className="row">
              <div className="col-md-6 col-xl-3">
                <Blog dataAos="fade-right"  imagee={blog_1} daatee="1 Dec, 2022"/>
              </div>
              <div className="col-md-6 col-xl-3">
              <Blog dataAos="fade-right" imagee={blog_2} daatee="1 Oct, 2019"/>
              </div>
              <div className="col-md-6 col-xl-3">
                <Blog dataAos="fade-left" imagee={blog_3} daatee="1 Dec, 2023"/>
              </div>
              <div className="col-md-6 col-xl-3">
                <Blog dataAos="fade-left" imagee={blog_4} daatee="1 Nov, 2028"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Home