import React from 'react';
import { selectCartItems } from '../../redux/cart/cart.selectors'

import { connect } from 'react-redux'

import CustomButtom from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss';
import { createStructuredSelector } from 'reselect'
import { withRouter} from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
const CartDropdown = ({ cartItems, history }) => (
    <div className='cart-dropdown'>
    <div clasName='cart-items'>
    {
        cartItems.length ?
        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>
            ))
            :
            <span className='empty-message'>Your cart is empty</span>
    }
    </div>
    <CustomButtom onClick={() =>history.push("/checkout")}>GO TO CHECKOUT</CustomButtom>
    </div>
)
 const mapStateToProps = createStructuredSelector ({
     cartItems: selectCartItems
 })
export default withRouter(connect(mapStateToProps)(CartDropdown));