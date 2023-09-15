import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import { Link } from 'react-router-dom'

const Forgot = () => {
  return (
    <>
        <BreadCrumb title="Forgot Password"/>
        <div className="Forgot-wraper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="forgot-card">
                        <h3 className='text-center'>Reset Your Password</h3>
                        <p className='text-center my-2'>we will send an email to reset your password.</p>
                        <form action="" className='mt-3 d-flex flex-column gap-15'>
                            <div><input type="email" placeholder='Email' name='email' className="form-control" /></div>
                            <div className="">
                                <div className="mt-2 d-flex flex-column align-items-center gap-15 justify-content-center">
                                    <button className='button border-0'>Supmit</button>
                                    <Link to="/Login" className='button btncancel'>Cancel</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Forgot