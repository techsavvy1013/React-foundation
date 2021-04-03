/**
  @Package: PaymentForm.jsx
  @Date   : March 14th, 2021
  @Author : Xiao Ling
  @Reference: https://react-bootstrap.github.io/components/forms/
*/


import React from 'react'
import { usePaymentInputs } from 'react-payment-inputs';
import {Form,  Col } from 'react-bootstrap'


/******************************************************
  @Use: credit card input
******************************************************/



export default function StackedPaymentForm({ 
	touchedInputs ,
	handleCreditCardInput,
	handleCVCInput,
	handleDateInput,
	cardNumberError,
	expiredError,
	cvcError,
}) {

  const {
	// meta,
	getCardNumberProps,
	getExpiryDateProps,
	getCVCProps
  } = usePaymentInputs();

  return (
	<Form.Group>
	  <Form.Row>
	  <Form.Group as={Col} style={{ maxWidth: '30rem' }}>
		  <Form.Control
			// Here is where React Payment Inputs injects itself into the input element. 4121383114829548
			{...getCardNumberProps()}
			// You can retrieve error state by making use of the error & touched attributes in `meta`.
			isInvalid={cardNumberError !== ''}
			placeholder="0000 0000 0000 0000"
			onChange = {handleCreditCardInput}
		  />
		  <Form.Control.Feedback type="invalid">{cardNumberError}</Form.Control.Feedback>
	  </Form.Group>
	  </Form.Row>

	  <Form.Row>
		<Col sm = {6}> 
		  <Form.Control
			{...getExpiryDateProps()}
			isInvalid={expiredError !== ''}
			onChange = {handleDateInput}
		  />
		  <Form.Control.Feedback type="invalid">{expiredError}</Form.Control.Feedback>
		</Col>
		<Col sm={6}>
		  <Form.Control
			{...getCVCProps()}
			isInvalid={cvcError !== ''}
			placeholder="123"
			onChange = {handleCVCInput}
		  />
		  <Form.Control.Feedback type="invalid">{cvcError}</Form.Control.Feedback>
		</Col>
	  </Form.Row>

	</Form.Group>
  );
}

/*
		<Col xs="auto">
		  <Button style={onBtnStyle}>
			Connect
		  </Button>
		</Col>        
*/

export function HoriztonalPaymentForm() {
  const {
	meta,
	getCardNumberProps,
	getExpiryDateProps,
	getCVCProps
  } = usePaymentInputs();
  const { erroredInputs, touchedInputs } = meta;

  return (
	<Form.Group>
	  <Form.Row>

		<Form.Group as={Col} style={{ maxWidth: '15rem' }}>
		  <Form.Label/>
		  <Form.Control
			// Here is where React Payment Inputs injects itself into the input element.
			{...getCardNumberProps()}
			// You can retrieve error state by making use of the error & touched attributes in `meta`.
			isInvalid={touchedInputs.cardNumber && erroredInputs.cardNumber}
			placeholder="0000 0000 0000 0000"
		  />
		  <Form.Control.Feedback type="invalid">{erroredInputs.cardNumber}</Form.Control.Feedback>
		</Form.Group>
	  
		<Form.Group as={Col} style={{ maxWidth: '10rem' }}>
		  <Form.Label/>
		  <Form.Control
			{...getExpiryDateProps()}
			isInvalid={touchedInputs.expiryDate && erroredInputs.expiryDate}
		  />
		  <Form.Control.Feedback type="invalid">{erroredInputs.expiryDate}</Form.Control.Feedback>
		</Form.Group>
		<Form.Group as={Col} style={{ maxWidth: '7rem' }}>
		  <Form.Label/>
		  <Form.Control
			{...getCVCProps()}
			isInvalid={touchedInputs.cvc && erroredInputs.cvc}
			placeholder="123"
		  />
		  <Form.Control.Feedback type="invalid">{erroredInputs.cvc}</Form.Control.Feedback>
		</Form.Group>
	  </Form.Row>
	</Form.Group>
  );
}