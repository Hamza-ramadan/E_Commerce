import React from 'react'
import { Link } from 'react-router-dom'

const Featured = (props) => {
  return (
    <>
    <div className=' mb-3 bbl'>
        <div className='blog-cart'>
            <div className='blog-img' >
                <img src={props.imagee}  className='img-fluid' alt="blog"/>
            </div>
            <div className='blog-content' >
                <h6 className='title'>assssss</h6>
                <h5 className='texxt'>{props.texxt}</h5>
                <p className='desc'>
                Smile! why? Because the smile makes you beautiful, because
                            it reduces your stress, and because it helps you stay positive</p>
                {/* <Link to="/" className='button'>Read More</Link> */}
                <h3>500$</h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default Featured