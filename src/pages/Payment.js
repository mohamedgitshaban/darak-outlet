import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "../scss/Payment.css";

import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate
  } from '../components/utils';
function Payment() {
  const [payment, setPayment] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  });
  function handleCallback({ issuer }, isValid) {
    if (isValid) {
      setPayment({ issuer });
    }
  }
 function onInputFocus ({ target }) {


  }
  function onInputUpdate({ target }) {

    const { name, value } = target;
    if (target.name === 'number') {
        target.value = formatCreditCardNumber(target.value)
      } else if (target.name === 'expiry') {
        target.value = formatExpirationDate(target.value)
      } else if (target.name === 'cvc') {
        target.value = formatCVC(target.value)
      }
    setPayment((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  function handleSubmit(e) {}
  return (
    <div key="Payment" className="Payment container">
      <div className="row">
        <Cards className=" col-lg-6 col-md-6 col-xs-12"
          number={payment.number}
          name={payment.name}
          expiry={payment.expiry}
          cvc={payment.cvc}
          focused={payment.focused}
          callback={handleCallback}
        />
        <form onSubmit={handleSubmit} className="col-lg-6 col-md-6 col-xs-12">
          <div className="form-group ">
            <input
              type="tel"
              name="number"
              className="form-control"
              placeholder="Card Number"
              pattern="[\d| ]{16,22}"
              required
              onChange={onInputUpdate}
              onFocus={onInputFocus}
            />
          </div>
          <div className="form-group ">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              required
              onChange={onInputUpdate}
              onFocus={onInputFocus}
            />
          </div>
          <div className="row ">
            <div className="col-6">
              <input
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="Valid Thru"
                pattern="\d\d/\d\d"
                required
                onChange={onInputUpdate}
                onFocus={onInputFocus}
              />
            </div>
            <div className="col-6">
              <input
                type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                pattern="\d{3,4}"
                required
                onChange={onInputUpdate}
                onFocus={onInputFocus}
              />
            </div>
          </div>
          <input type="hidden" name="issuer" value={payment.issuer} />
          <div className="d-grid">
            <button className="btn btn-dark">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Payment;