import React, { Component } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
//components imports
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/heaader/Header';
import SignInSignOut from './pages/sing-in-sing-out/SignInSignOut';
import Checkout from './pages/checkout/Checkout';
//Redux imports
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import {
  auth,
  createUserProfileDocument
} from './firebaseConfig/firebase.utils';

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

        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/shop/" component={ShopPage} />
        <Route exact path="/shop/:category" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            this.props.currentUser ? <Redirect to="/" /> : <SignInSignOut />
          }
        />
        <Route path="/checkout" component={Checkout} />
      </div>
    );
  }
}

App.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  currentUser: PropTypes.object
};

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
