import React, { useState } from 'react'
import visa_1 from "../images/Visa/vis-1.jpg.png"
import visa_2 from "../images/Visa/visa-2.jpg"
import visa_3 from "../images/Visa/visa-3.jpg"
import visa_4 from "../images/Visa/vis-4.jpg"
import visa_5 from "../images/Visa/visa-5.jpg"
import visa_6 from "../images/Visa/visa-6.jpg"
const Popup = ({pricee , titleBtn}) => {
    const [popup , setPopup] = useState(false)
    const hundelopen = () =>{
        
        setPopup(!popup)
        
    }
    const hundelclose = () =>{
        setPopup(false)
    }
   
  return (
    <>
        <button className='mb-1 mx-2 btn btn-primary' onClick={hundelopen}>{titleBtn}</button>
        {popup ?
        <div className="mainpopup">
            <div className="sectionpopup">
                <div className="popup-header d-flex">
                    <h3>Price:{pricee}<span className='spangren'>$</span></h3>
                    <i  onClick={hundelclose} className="fa-solid fa-xmark"></i>
                </div>
                <div className="popup-detailes">
                    <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Name....." id="name"className="form-control"/>
                <label htmlFor="address">Enter the address details:</label>
                <input type="text" className="form-control" id='address'  placeholder="Enter Your address....."/>
                <label htmlFor="email">Enter the Email:</label>
                <input type="email" id='email' className="form-control" placeholder="Enter Your email....."/>
                <label htmlFor="tel">Enter your phone number and wait for a confirmation message:</label>
                <input type="tel" className="form-control" id='tel' placeholder="+20....."/>
                </div>
                <div className="popup-pay text-center ">
                <button className='mb-1 mx-2 btn btn-info'>Complete The Purchase</button>

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
        :""}
    </>
  )
}

export default Popup