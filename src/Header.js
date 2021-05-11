import React from 'react'
import './Header.css'
import Imgamazon from './Images/Amazon_logo.svg'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase'

function Header() {

    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className = "header">
            <Link to = '/'>
                <img
                    className = "header__logo" 
                    src= {Imgamazon} 
                    alt="Amazon logo"
                />            
            </Link>


            <div className="header__search">
                <input
                    className = "header__searchInput"
                    type="text" />
                    <SearchIcon className = "header__SearchIcon" />
            </div>

            <div className="header__nav">
                <Link to = {!user && '/login'}> {/* THis code shows that if the user is not signed in then it will redirect to login page */}
                    <div onClick = { handleAuthentication } className="header__option">
                        <span className="header__optionLineOne">
                            Hello {user?.email}
                        </span>

                        <span className="header__optionLineTwo"> { user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns &
                    </span>

                    <span className="header__optionLineTwo">
                        Orders
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>

                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>

                <Link to = '/Checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo 
                        header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
