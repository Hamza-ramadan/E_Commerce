import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'

const Contact = () => {
  return (
    <>
        <BreadCrumb title="Contact"/>
        <div className="blog-wrapper py-5 home-wrapper-2">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110555.48086810693!2d31.260672!3d30.012211200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840ac90c2ed63%3A0x2fdb96e4e9f72e6f!2z2YLZhNi52Kkg2LXZhNin2K0g2KfZhNiv2YrZhiDYp9mE2KPZitmI2KjZig!5e0!3m2!1sar!2seg!4v1691499438053!5m2!1sar!2seg"
                        height="450" className='border-0 w-100'
                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110555.48086810693!2d31.260672!3d30.012211200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840ac90c2ed63%3A0x2fdb96e4e9f72e6f!2z2YLZhNi52Kkg2LXZhNin2K0g2KfZhNiv2YrZhiDYp9mE2KPZitmI2KjZig!5e0!3m2!1sar!2seg!4v1691499438053!5m2!1sar!2seg"
                         className='border-0 w-100' height="450"  allowFullScreen="" 
                          loading="lazy"  referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-12 mt-5" >
                        <div className="contact-inner-wrapper d-flex align-items-center justify-content-between" >
                            <div className="">
                                <h3 className="contact-title mb-4">Contact:</h3>
                                <form action="" className='d-flex flex-column gap-20'>
                                    <div className="">
                                        <input type="text" className="form-control" placeholder='Name' />
                                    </div>
                                    <div className="">
                                        <input type="email" className="form-control" placeholder='Email' />
                                    </div>
                                    <div className="">
                                        <input type="tel" className="form-control" placeholder='Mobile Number'/>
                                    </div>
                                    <div className="">
                                        <textarea name="" id=""  cols="30" className='w-100 form-control' placeholder='Comments' rows="4"></textarea>
                                    </div>
                                    <div className="">
                                        <button className='button'>Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="contact-touch">
                                <h3 className="contact-title mb-4">Get in touch With Us:</h3>
                                <div className=" ps-0">
                                    <address className=' fs-5 mb-3'><i className="fa-solid fa-house"></i> Hmo : 8 Al-Zuhairi Street ,<br/> Shoubra Egypt ,Cairo.</address>
                                    <p className='fs-5  mb-3 '>
                                    <i className="fa-solid fa-phone"></i>Hotline: <a className='t ' href="+20 111 758 5124">+20 111 758 5124</a>
                                    </p>
                                    <p className='fs-5  mb-3  '>
                                    <i className="fa-regular fa-envelope"></i>Gmail: <a className=' ' href="/">hahar067@gmail.com</a>
                                    </p>
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

export default Contact