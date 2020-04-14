import React from 'react'

function SignIn() {
    return (
        <div id = 'welcome'>
            <span><h1 className='head'>Welcome </h1></span>
            <span><h2 className='tail'> Please click below to Register</h2></span>
        </div>
        // <form noValidate>
        //     <div id = "signin">
        //         <h2>Welcome back! Please login to your account</h2>


        //         <div className="pair">
        //             <p className="text">Email address</p>
        //             <input type="email" name = "email" className="field"  id ="email" placeholder="Email"/>   

        //             <p className="text">Password</p>
        //             <input type="password" name = "password" className="field" id ="password" placeholder="Password"/>
        //         </div>


        //         <div className="check">
        //             <input className="box" type="checkbox" />
        //             <p className="remember">Remember me</p>
        //             <a><p className="forgot">Forgot password</p></a>
        //         </div>

        //         <button href="#" className="square_btn enter" ><a href="#">SIGN IN</a></button>
        //     </div>
        // </form>
    )
}

export default SignIn