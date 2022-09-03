import React from 'react'
import './Login.css'

function Login({ setUser }) {
    const signIn = (e) => {
        e.preventDefault();

        setUser("Sebastiano Saad");
    };

  return (
    <div className='login'>
        <div className='login_logo'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="" />
            <img className="login_logoname" alt="" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
        </div>

        <button type="submit" onClick={signIn}>
            Sign In
        </button>
    </div>

  )
}

export default Login