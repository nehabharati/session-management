import React, {useState} from 'react'


function  Register(props){

    function showMessage(e) {
        e.preventDefault()
        let route = document.getElementById('address').value
        let name = document.getElementById("name").value
        let message = document.getElementById('message')
        let missing = document.getElementById('missing')
        let pass = document.getElementById('pass').value


        let details = {
            "name": name,
            "email": route,
            "password": pass
          }
        fetch("https://nehabharatis.appspot.com/users", {
            "method":"POST",
            "headers": {
                "content-type": "application/json"
              },
            "body": JSON.stringify(details)
        })
        .then(res => res.json())
        .then(data => 
            {
                let header = document.getElementById('heading')
                var alert = document.createElement("div");
                let main = document.getElementById("main")
                if (isEmail(route)) {
                if (data.message === ("Account has been created successfully for " + name)) {
                    alert.style.background= 'transparent'
                    alert.style.color = '#1e6163'
                    alert.style.fontSize = "20px"
                    alert.style.fontWeight = '400'
                    alert.style.padding = '10px'
                    alert.innerHTML = data.message 
                    header.remove()
                    main.appendChild(alert);
                }
                else if (route === '' || name === '' || pass === "") {
                    missing.innerHTML= "Please fill in the empty fields"
                    setTimeout (() => {(missing).remove()},10000)

                }
                else if (data.message === "An account with this email id already exists. Please try again") {
                     message.innerHTML= data.message
                     setTimeout (() => {(message).remove()},10000)
                }
            }
            })
             if (!isEmail(route)) {
                message.innerHTML = 'Not a valid email'
                 setTimeout (() => {(message).remove()},10000)
                
            }
            function isEmail(mail) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail)
            }
            document.getElementById('wrapper').reset()
    }

    return (
        <form id ="wrapper" noValidate>
            <div id = "slide">
            <h2 id = "heading">Please create your account</h2>
            <h2 id ='main'></h2>

            <div className="slide-pair">
                <p className="text">Full Name</p>
                <input type="text" name = "name" className="field"  id ="name" defaultValue = "" placeholder="Full name"/>   

                <p className="text">Email</p>
                <input type="email" name = "address" className="field"  id ="address" defaultValue = "" placeholder="Email address"/>   
                <p id = "message"></p>

                <p className="text">Password</p>
                <input type="password" name = "password" className="field" id ="pass" placeholder="Password"/> 
                <p id = "missing"></p>  
            
            </div>
            

                <button href="#" type = "button" className="signup" onClick={showMessage}>SIGN UP</button>
            </div>
        </form>
    )
}

export default Register