import React from 'react'
import './SubTotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';



function SubTotal() {

    const history = useHistory();

    const [{basket}, dispatch] = useStateValue();
    
    return(
        <div className = 'subtotal'>
            <CurrencyFormat
                renderText = {(value) => (
                <>
                    <p> 
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className  = "subtotal__gift">
                        <input type = "checkbox" /> This order 
                        contains a gift
                    </small>
                </>
                )}

                decimalScale = {2}
                value = {getBasketTotal(basket)}
                displayType = {"text"}
                thousandSeperator = {true}
                prefix = {"$"}
            />
            <button onClick = {e => history.push('/payment')}>Proceed to checkout</button> {/*If we want to oush the user somewhere we can use history. */}

        </div>
    );
}

export default SubTotal
