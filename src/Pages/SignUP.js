import React, { useState } from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import { Link } from 'react-router-dom';

const SignUP = () => {

    const [name, setName] = useState("");
    const [email, setEmali] = useState("");
    const [password, setPassword] = useState("");
    const [passwordr, setPasswordr] = useState("");
    const [accept, setArccept] = useState(false);
    const [flag, setFlag] = useState(true);

    async function Sbumit(e) {

        e.preventDefault();
        setArccept(true);
        if (passwordr !== password || password.length < 8 || name === "") {
        setFlag(false);
        }else setFlag(true);
    
        // if (flag === true) {
        //     const ress = await axios.post("http://localhost:9000/Users",{
        //         email: email,
        //     name: name,
        //     password: password,
        //     password_confirmation:passwordr,
        //     })
        
        //     if (ress.status === 200|| ress.status === 201 ) {
        //         // navigate('/Login');
        //         window.location.pathname="/";
    
        //         window.localStorage.setItem('email', email)
        //     }
        // }
    }
  return (
    <>
    <BreadCrumb title="SignUp"/>
        <div className="signup-wraper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="login-card">
                        <h3 className='text-center'>SignUp</h3>
                        <form onSubmit={Sbumit} className='mt-3 d-flex flex-column gap-15 '>
                            <div>
                            <label htmlFor="name">Name:</label>
                                <input
                                type="text"
                                placeholder="Name....."
                                id="name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                                {name === "" && accept === true && <p>Username is Recuired</p>}
                            </div>
                            <div>
                                <label htmlFor="email">Emali:</label>
                                <input
                                type="email"
                                placeholder="Emali....."
                                id="email"
                                className="form-control"
                                value={email}
                                required
                                onChange={(e) => setEmali(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input
                                type="password"
                                placeholder="Password....."
                                id="password"
                                className="form-control"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                />
                                {password.length < 8 && accept === true && (
                                <p>Password must be more 8 Char</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="repeat">Repeat-password:</label>
                                <input
                                type="password"
                                placeholder="Repeat-password....."
                                id="repeat"
                                className="form-control"
                                value={passwordr}
                                onChange={(e) => setPasswordr(e.target.value)}
                                />
                                {passwordr !== password && accept === true && (
                                <p>password does not Match</p>
                                )}
                            </div>
                            <div className="">
                                <div className="mt-3 d-flex align-items-center gap-15 justify-content-center">
                                    <button className='button border-0'>Sign</button>
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

export default SignUP