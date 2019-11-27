import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import Header from  "./components/header/header.component.jsx"
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { throws } from 'assert';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state)
        })
      } else {
      this.setState({currentUser: userAuth})
      }
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignOutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
