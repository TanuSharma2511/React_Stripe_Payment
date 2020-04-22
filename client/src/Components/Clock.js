import React from 'react';
import "../clock.css";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import {toast} from "react-toastify";

toast.configure();

function Clock() {

   const [product] = React.useState({
      name:"Digital Watch",
      price:100,
      description:"Awesome Watch"
   })

async function handleToken(token){
  // console.log({token,addresses});
 const response=  await axios.post("http://localhost:4000/checkout",{
    token,
    product
  });
  const {status} = response.data

  if( status ==="success" ){
      //toast("Success ! Check emails for details",{ type:"info" , position:"top-right" })
     alert("Transaction Succeded");

  }
  else{
   // toast("Something Went Wrong",{ type: "error" });
    alert("Transaction failed");
  }
}

    return (
       <React.Fragment>
          <section className="py-2">
  <div className="row">
    <div className="col-md-6 text-center">
      <h1 className="display-3 mt-3 pt-5">
        Awesome Digital Watch
      </h1>
      <div className="wrap">
         <div className="list">   

<div className="listItem listItem11"><label>Specifications - </label><span> </span></div>
<div className="listItem"><label>Alarm Clock :</label><span> 5 Alarm Settings</span></div>
<div className="listItem"><label>Light : </label><span>LED Amber Light</span></div>
<div className="listItem"><label>Calender : </label><span>Yes</span></div>
<div className="listItem"><label>Weight : </label><span>70g</span></div>
<div className="listItem"><label>Thickness : </label><span> 16.9mm </span></div>
<div className="listItem"><label>Power Source : </label><span> Battery Powered </span></div>
<div className="listItem"><label>Warranty : </label><span> 1 Year International Warranty </span></div>
<div className="listItem price"><label>Price : </label><span> $100 </span></div>

</div> 

      
      </div>
    </div>
    <div className="col-md-6">
      <div className="space">

       <img src="https://i.imgur.com/1mJWEZb.png" />
      
      <div className="stripe">
      <StripeCheckout 
      stripeKey="pk_test_bCFiJWRtNB4882kiwVTL5mao00FJYIkcyg" 
      token={handleToken}
      billingAddress
      shippingAddress
      amount={product.price*100}
      name={product.name}
      />
      </div>
    </div>
    </div>
  </div>
</section>

       </React.Fragment>
    )
}

export default Clock;
