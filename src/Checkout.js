import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import SubTotal from './SubTotal'

function Checkout() {

    const [{ basket, user}, dispatch] = useStateValue();

    return (
        <div className = "checkout">
            <div className="checkout__left">
                <img className = 'checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/15/Events/2020/Dash/updated_Q4_2020_HolidayDash_LandingPage_Desktop_Hero_1500x150.png" alt=""/>
                <div>
                    <h3>Hello { (user) ? user?.email : 'there' } </h3>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct 
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        />
                    ))}
                    {/* CheckoutProduct*/}
                    {/* CheckoutProduct*/}
                    {/* CheckoutProduct*/}
                    {/* CheckoutProduct*/}


                </div>
            </div> 
            <div className="checkout__right">
               <SubTotal />
            </div>
        </div>
    )
}

export default Checkout;
