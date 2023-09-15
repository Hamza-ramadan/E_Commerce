import React from 'react'
import { Link } from 'react-router-dom'

const Blog = (props) => {
    const scrollUp = () => {
        window.scrollTo({
            top:0,
             behavior:"smooth"
        })
    }
  return (
        <div className='blog-cart mb-3'  data-aos={props.dataAos}>
            <div className='blog-img' >
                <img src={props.imagee} className='img-fluid w-100' alt="blog"/>
            </div>
            <div className='blog-content' >
                <p className='date'>{props.daatee}</p>
                <h5>A beautiful sunday morning renaissance renaissance .</h5>
                <p className='desc'>
                Smile! why? Because the smile makes you beautiful, because
                            it reduces your stress, and because it helps you stay positive</p>
                <Link onClick={scrollUp} to="/Blogs" className='button'>Read More</Link>
            </div>
        </div>
  )
}

export default Blog