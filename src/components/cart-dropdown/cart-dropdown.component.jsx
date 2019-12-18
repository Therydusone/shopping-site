import React from 'react';
import { selectCartItems } from '../../redux/cart/cart.selectors'

import { connect } from 'react-redux'

import CustomButtom from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems}) => (
    <div className='cart-dropdown'>
    <div clasName='cart-items'>
    {
        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
    }
    </div>
    <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
)
 const mapStateToProps = (state )=> ({
     cartItems: selectCartItems(state)
 })
export default connect(mapStateToProps)(CartDropdown);