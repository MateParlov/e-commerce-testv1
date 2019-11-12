import React from "react";
import StripeCheckout from "react-stripe-checkout";
import PropTypes from "prop-types";
import leafLogo from "./../../../assets/logo/leafLogo.png";
const StripeButton = props => {
  const { price } = props;
  const pubKey = process.env.REACT_APP_STRIPE_PUB_KEY;

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="leaf-shop"
      image={leafLogo}
      billingAddress
      shippingAddress
      description={`Total price is $${price}`}
      panelLabel={`Pay now ${price}$`}
      token={onToken}
      stripeKey={pubKey}
    />
  );
};

StripeButton.propTypes = {
  price: PropTypes.number.isRequired
};

export default StripeButton;
