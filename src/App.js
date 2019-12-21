import React from 'react';
import { GlobalStyle } from './global.styles'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Switch, Route, Redirect} from "react-router-dom";
import Header from  "./components/header/header.component.jsx"
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'
import CheckoutPage from './pages/checkout/checkout.component'

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

  
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <GlobalStyle/>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignOutPage />)} />
          
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

export default connect(mapStateToProps )(App);
