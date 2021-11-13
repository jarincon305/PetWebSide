import React from 'react'
import { useEffect } from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";

function Card({imageSource, title, url, text}) {
  
useEffect(()=>{
  for (let i = 0; i < document.querySelectorAll('.StripeCheckout span').length; i++) {
      document.querySelectorAll('.StripeCheckout span')[i].innerHTML = 'Añadir al carrito'; 
    }
  },[]);

  async function handleToken(token, addresses) {
    console.log(">>>", token);
    const response = await axios.post(
      "http://localhost:3000/",
      { token, imageSource }
    );
  }

  return (
    // Cards
    <div className="card text-center">
      <img src={imageSource} alt="" width="300px" height="200px"/>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">ID - {text}</p>
          <div className="container prueba">
            <StripeCheckout
              stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
              token={handleToken}
              amount={100 * 100}
              name="Tesla Roadster"
              billingAddress
              shippingAddress
            />
        </div>
      </div>
    </div>
  )
}

export default Card
