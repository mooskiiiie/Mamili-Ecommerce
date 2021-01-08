import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';
import { Spring } from 'react-spring/renderprops';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/home')
        })
        .catch(error => alert(error.message))

        //firebase login
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //should have successfuly created a new user with email and password
            console.log(auth);
            if (auth) {
                history.push('/home')
            }
        })
        .catch(error => alert(error.message))

        //firebase register
    }

    return (
        <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 600, duration: 1000}}
    >
        { props => (
             <div style={props}> 
        <div className='login'>
            <div className='login__header'>
                <div className='login__logoLeft'>
                    <img clasName="login__headerLogo" src="/images/Mamili.png" alt="logo"/> 
                    
                </div>
                <div className="login__headerNav">
                    <Link className='link' to='/help'>
                    <div className="login__headerOption">
                        <span className="login__optionLineOne">Help</span>
                    </div>
                    </Link>
                </div>
            </div>

            <div className='login__main'>
                <img src='/images/logo.png' alt='' className='login__logo' />
                
                <div className='login__container'>
                    <img src='/images/Sign Up.png' alt='' />

                    <form>
                        <h5>E-mail</h5>
                        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                        <h5>Password</h5>
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                        <button type='submit' onClick={signIn} className='login__signInButton'>LOG IN</button>
                    </form>

                    <p>
                        By signing-in you agree to the Mamili Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button onClick={register} className='login__registerButton'>Create your Mamili Account</button>
                    <Link to='/' className='maybe__later'>
                    <p className='later'>Maybe Later</p>
                    </Link>
                </div>
            </div>
        </div>
         </div>
         )}
     </Spring>
    )
}

export default Login
