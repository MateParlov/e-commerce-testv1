import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/heaader/Header';
import SignInSignOut from './pages/sing-in-sing-out/SignInSignOut';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import {
  auth,
  createUserProfileDocument
} from './firebaseConfig/firebase.utils';
import Checkout from './pages/checkout/Checkout';
const aws = require('aws-sdk');

let s3 = new aws.S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET
});

console.log(s3.accessKeyId);
class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
          <Route path="/shop/" component={ShopPage} />
          <Route path="/shop/:category" component={ShopPage} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignOut />
            }
          />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
