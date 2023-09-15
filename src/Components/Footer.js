import React from 'react'
import img1 from '../images/newsletter.png'
import { Link } from 'react-router-dom'
import visa_1 from "../images/Visa/vis-1.jpg.png"
import visa_2 from "../images/Visa/visa-2.jpg"
import visa_3 from "../images/Visa/visa-3.jpg"
import visa_4 from "../images/Visa/vis-4.jpg"
import visa_5 from "../images/Visa/visa-5.jpg"
import visa_6 from "../images/Visa/visa-6.jpg"
const Footer = () => {
  
  return (
    <>
      <footer className='py-4'>
          <div className='container '>
            <div className=' row'>
              <div className='col-12 col-xl-5 mb-3 mb-xl-0 '>    
                <div className='footer-top-data d-flex gap-30 align-items-center'>
                  <img src={img1} alt=""/>
                  <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
                </div>
              </div>
              <div className='col-12 col-xl-7 input-groupssssss'>    
                  <div className="input-group ">
                      <form >
                        <input type="text" name="email" id="mail" placeholder="Your Email Adress."aria-label="Your Email Adress."/>
                        <a href="/">Subscribe</a>
                      </form>
                  </div>
              </div>
            </div>
          </div>
      </footer>
      <footer className='footer-tow py-3'>
        <div className='container'>
          <div className='row '>
            <div className='footer-tow-desc col-12 col-md-6 col-xl-3'>
              <h4 className=' mb-3'>Contact Us :</h4>
              <div>
                <address className='text-white fs-5'>
                Hmo : 8 Al-Zuhairi Street ,<br/> Shoubra Egypt ,Cairo.
                </address>
                <p className='fs-5 text-white'>
                  Hotline: <a className='text-white ' href="+20 111 758 5124">+20 111 758 5124</a>
                </p>
                <p className='fs-5 text-white'>
                  Gmail: <a className='text-white ' href="/">hahar067@gmail.com</a>
                </p>
                <div className='social-icon d-flex flex-row'>
                  <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="/"><i className="fa-brands fa-instagram"></i></a>
                  <a href="/"><i className="fa-brands fa-twitter"></i></a>
                  <a href="/"><i className="fa-brands fa-telegram"></i></a>
                </div>
              </div>
            </div>
            <div className='footer-tow-desc col-6 col-xl-2'>
              <h4 className=' mb-3 '>Information :</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className=' py-2 mb-1'>- Privacy Policy</Link>
                <Link className='py-2 mb-1'>- Refund </Link>
                <Link className=' py-2 mb-1'>- shipping Policy</Link>
                <Link className=' py-2 mb-1'>- Terms Of Service</Link>
                <Link className=' py-2 mb-1'>- Blogs</Link>
              </div>
            </div>
            <div className=' footer-tow-desc col-6 col-md-4  col-xl-2'>
              <h4 className=' mb-3'>Accont :</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className=' py-2 mb-1'>- Search</Link>
                <Link className=' py-2 mb-1'>- About US</Link>
                <Link className='py-2 mb-1'>- Faq</Link>
                <Link className=' py-2 mb-1'>- Contact</Link>
                <Link className=' py-2 mb-1'>- Size Chart</Link>
              </div>
            </div>
            <div className=' footer-tow-desc col-4 col-md-3 col-xl-2'>
              <h4 className=' mb-3'>Quick Links :</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className=' py-2 mb-1'>- Accessoris</Link>
                <Link className=' py-2 mb-1'>- Laptops</Link>
                <Link className=' py-2 mb-1'>- Headohones</Link>
                <Link className=' py-2 mb-1'>- Tablets</Link>
                <Link className=' py-2 mb-1'>- Watch</Link>
              </div>
            </div>
            <div className='footer-tow-desc col-7 col-md-3  col-xl-3'>
              <h4 className=' mb-3'>Our App:</h4>
              <p  className='text-white fs-6'>Now the application is available on <br/> each of the following platforms :</p>
              <div >
                <div className='justify-content-center align-items-center d-flex ddd '>
                <i className="fa-brands fa-apple"></i>
                <div>
                  <p className='mb-0'>Download from</p>
                  <h5 className='mt-0' >App Store</h5>
                </div>
                </div>
                <div className='justify-content-center align-items-center d-flex mt-2 ddd '>
                <i className="fa-brands fa-google-play"></i>
                <div>
                  <p className='mb-0'>Download from</p>
                  <h5 className='mt-0'>Google Play</h5>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4 foootter'>
        <div className='container '>
        <div className=' row'>
          <div className='col-12 mb-0 text-white viasss d-flex justify-content-between align-items-center'>
            <p className='sdddd mt-1'>&copy; {new Date().getFullYear()}; <span> تحت رعايه واشراف فيليكس الفقدان اللي هو أنا. </span></p>
            <div className='viasssw d-flex justify-content-end align-items-center'>
              <img src={visa_1} alt=""/>
              <img src={visa_2} alt=""/>
              <img src={visa_3} alt=""/>
              <img src={visa_4} alt=""/>
              <img src={visa_6} alt=""/>
              <img src={visa_5} alt=""/>
            </div>
          </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer