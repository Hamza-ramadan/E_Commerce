import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <BreadCrumb title="Login"/>
        <div className="login-wraper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="login-card">
                        <h3 className='text-center'>Login</h3>
                        <form action="" className='mt-3 d-flex flex-column gap-15'>
                            <div><input type="email" placeholder='Email' name='email' className="form-control" /></div>
                            <div className='mt-2'><input type="password" placeholder='Password' name='password' className="form-control" /></div>
                            <div className="">
                                <Link to="/forgot-password">Forgot Your Password...?</Link>
                                <div className="mt-3 d-flex align-items-center gap-15 justify-content-center">
                                    <button className='button border-0'>Login</button>
                                    <Link to="/signup" className='button signup'>SignUP</Link>
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

export default Login