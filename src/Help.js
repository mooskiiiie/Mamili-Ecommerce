import React from 'react';
import { Link } from 'react-router-dom';
import Component1 from './Components/Component';
import './Help.css';
import Polls from './Pages/Polls';





function Help() {
    return (

        <div className='help'>
            <div className='help__header'>
                <Link className='header__logoLink' to='/'>
                <div className='help__logoLeft'>
                    <img clasName="login__headerLogo" src="/images/Mamili.png" alt="logo"/> 
                </div>
                </Link>
                <div className="login__headerNav">
                    <div className="login__headerOption">
                        <span className='help__optionLine'>|</span>
                        <span className="help__optionLineOne">Help Centre</span>
                    </div>
                </div>
            </div>
            <div className='help__banner'>
                <div className='help__prompt'>
                    <h1>Hi, how can we help?</h1>
                </div>
                <div className='help__input'>
                    <input className="help__searchInput" type="text" placeholder='Ask questions or input keywords' />
                </div>
                
            </div>
           
         
            {/*continue here*/}
        </div>
    )
}

export default Help
