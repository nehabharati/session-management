import React, {useState} from 'react'
import './sass/index.scss'
import Register from './Register'
import SignIn from './SignIn'

function App() {
    const [showEffect,setShowEffect] = useState(false)

    function handleClick() {
        // document.getElementById('signin').className = 'signin-wrap'
        document.getElementById('reg').className = 'signin-wrap'
        document.getElementById('welcome').className = 'signin-wrap'
        return setShowEffect(!showEffect)
    }

    return (
        <div >
            <SignIn />
            <button id="reg" onClick={handleClick}>REGISTER</button>
            {showEffect ? 
            <Register />
             : null}
        </div>
    )
}

export default App