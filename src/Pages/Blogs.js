import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import imgstore from "../images/store.jpg"
import imgoffer from "../images/sale.jpg"
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <>
        <BreadCrumb title="Blogs"/>
        <div className="blogs-section py-4">
            <div className="container">
                <div className="row">
                    <div className="blog-box-1">
                        <div className="col-12 imgstore">
                            <img src={imgstore} className='img-fluid' alt="" />
                        </div>
                        <h2>Lorem ipsum dolor, sit amet consectetur  Lorem, ipsum dolor adipisicing elit. Totam, alias ipsam. Quam, nemo!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore autem explicabo quia iste iure recusandae distinctio hic,
                        in eaque voluptate error libero fuga quod, atque dignissimos laboriosam reiciendis ipsa at cumque facilis? Porro repudiandae
                        provident consequuntur. Repellat voluptas hic itaque cupiditate praesentium necessitatibus,
                        veniam commodi aliquam quae inventore provident
                        facere adipisci! Culpa temporibus perspiciatis nihil, ex omnis laborum voluptas ad.</p>
                    </div>
                    
                </div>
            </div>
            <div className="blog-box-2 my-5">
                <form action="">
                    <h3>subscribe for latest updates</h3>
                    <input type="email" name="" placeholder="enter your email" id="" className="box"/>
                    <input type="submit" value="subscribe" className="btn"/>
                </form>
            </div>
            <div className="container">
                <div className="blog-box-3">
                    <div className="row">
                    <div className="col-6">
                        <div className="content">
                            <h3>deal of the day.</h3>
                            <h1>upto <span>50% </span>off.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis in atque dolore<br/> tempora quaerat at fuga dolorum natus velit.</p>
                            <Link to={"/Ourstore"} className="btn">shop now</Link>
                        </div>
                        </div>
                        <div className="col-6">
                            <img src={imgoffer} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Blogs