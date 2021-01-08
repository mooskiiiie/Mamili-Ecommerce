import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import PollIcon from '@material-ui/icons/Poll';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import HelpIcon from '@material-ui/icons/Help';



function Header() {
    const [{ basket, user}, dispatch] = useStateValue();

   

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link className='header__logoLink' to='/'>
            <img clasName="header__logo" src="/images/Mamili.png" alt="logo"/> 
            </Link>
        
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                
                <Link to='/polls' className='link'>
                <div className="header__option">
                    <PollIcon className="header__optionLineOne"/>
                </div>
                </Link>

                <div className="header__option">
                    <NotificationsActiveIcon className="header__optionLineOne"/>
                </div>

                <Link to='/checkout' className='link'>
                <div className="header__option">
                    <ShoppingBasketIcon className="header__optionLineOne"/> {basket?.length}
                </div>
                </Link>
                
                
                <Link className='link' to='/profile'>
                <div className="header__option">
                    <PersonIcon className="header__optionLineOne"/>
                </div>
                </Link>
                <Link className='link' to='/help'>
                <div className="header__option">
                    <HelpIcon className="header__optionLineOne"/>
                </div>
                </Link>

                <Link className='link' to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In | Log In'}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
