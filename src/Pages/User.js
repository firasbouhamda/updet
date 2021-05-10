import React from 'react'
const User = () => {

    return (
        <div>
           
           <form>
  <input id="input-1" type="text" placeholder="Full Name" required autofocus />
  <label for="input-1">
    <span className="label-text">Full Name</span>
    <span className="nav-dot"></span>
    <div className="signup-button-trigger">Sign Up</div>
  </label>
  <input id="input-2" type="text" placeholder="john" required />
  <label for="input-2">
    <span className="label-text">Username</span>
    <span className="nav-dot"></span>
  </label>
  <input id="input-3" type="email" placeholder="email@address.com" required />
  <label for="input-3">
    <span className="label-text">Email</span>
    <span className="nav-dot"></span>
  </label>
  <input id="input-4" type="Password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
  <label for="input-4">
    <span className="label-text">Password</span>
    <span className="nav-dot"></span>
  </label>
  <input id="input-5" type="text" placeholder="+216" required />
  <label for="input-5">
    <span className="label-text">Phone</span>
    <span className="nav-dot"></span>
  </label>
  <input id="input-5" type="text" placeholder="+216" required />
    <label for="input-5">
        <span className="label-text">option</span>
        <span className="nav-dot"></span>
  </label>
  <button type="submit">Create Your Account</button>
  <p className="tip">Press Tab</p>
  <div className="signup-button">Sign Up</div>
</form>

           </div>
        
        
    )
}

export default User
