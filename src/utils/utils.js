/*
  @Package: utils.js
  @Date   : March 3rd, 2021
  @Author : Xiao Ling   
*/



/******************************************************
  compensate for no typesystem
******************************************************/

exports.illValued = (x) => {
	if (x === null || x === undefined){
		return true 
	} else {
		return false
	}
}

exports.trivialString = (x) => {

	if (x === null || x === undefined || x === ""){
		return true 
	} else if (x.trim() === ''){
		return true
	} else {
		return false
	}
}

exports.trivialProps = (props, fn) => {
	if (props === null || props === undefined || props === {} ){
		return true
	} else if ( fn === null || fn === undefined || fn === "" ){
		return true
	} else if ( props[fn] === null || props[fn] === undefined ) {
		return true
	} else {
		return false
	}
}

exports.trivialObj = (obj) => {
	return (obj === undefined || obj === null || obj === {})
}

exports.trivialNum = (n) => {
	return (n === undefined || n === null || n === 0)
}

/******************************************************
	time  
******************************************************/

// @Get now timestamp in seconds from 1972
exports.swiftNow = () => {
	return Math.round(Date.now()/1000)
}


// @Use: convert swift timestamp to millisecondsd since 1972
exports.fromSwiftTime = (t) => {
	return t * 1000
}

// encode firebase token as username for link in url
exports.dbTokenToName = (token) => {
	if (token === undefined || token === null || token === ""){
		return ""
	} else {
		return token
	}
}

/******************************************************
	string
******************************************************/

const reverseString = (str) => {
	var newString = "";
	for (var i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}
	return newString;
}

exports.generatePassword = (email) => {  
	const prefix =  "64439638952027"
	const suffix = "1904383418681"
	const _root  = reverseString(email)
	return `${prefix}_${_root}_${suffix}`
}



/******************************************************
	email
******************************************************/


exports.isEmail = (email) => {
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegEx)) return true;
  else return false;
};

const isEmail = (email) => {
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegEx)) return true;
  else return false;
};


const isEmpty = (string) => {
	if (string === null || string === undefined || string === ""){
		return true
	} else if (string.trim() === ''){
		return true
	} else {
		return false;
	}
};

exports.validateLoginData = (data) => {
   let errors = {};
   if (isEmpty(data.email)) errors.email = 'Must not be empty';
   if (isEmpty(data.password)) errors.password = 'Must not be  empty';
   return {
	   errors,
	   valid: Object.keys(errors).length === 0 ? true : false
	};
};


exports.validateSignUpData = (data) => {

  let errors = {};

  if (isEmpty(data.email)) {
	errors.email = 'Must not be empty';
  } 
  else if (!isEmail(data.email)) {
	errors.email = 'Must be valid email address';
  }

  if (isEmpty(data.firstName)) errors.firstName = 'Must not be empty';
  if (isEmpty(data.lastName)) errors.lastName = 'Must not be empty';

  if (isEmpty(data.password)) errors.password = 'Must not be empty';
  if (data.password !== data.confirmPassword) errors.confirmPassword = 'Passowrds must be the same';


  return {
	errors,
	valid: Object.keys(errors).length === 0 ? true : false
  };
};




/******************************************************
	credit card number
******************************************************/

function AmexCardnumber(inputtxt) {
  var cardno = /^(?:3[47][0-9]{13})$/;
  return cardno.test(inputtxt);
}

function VisaCardnumber(inputtxt) {
  var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  return cardno.test(inputtxt);
}

function MasterCardnumber(inputtxt) {
  var cardno = /^(?:5[1-5][0-9]{14})$/;
  return cardno.test(inputtxt);
}

function DiscoverCardnumber(inputtxt) {
  var cardno = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
  return cardno.test(inputtxt);
}

function DinerClubCardnumber(inputtxt) {
  var cardno = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
  return cardno.test(inputtxt);
}

function JCBCardnumber(inputtxt) {
  var cardno = /^(?:(?:2131|1800|35\d{3})\d{11})$/;
  return cardno.test(inputtxt);
}

function IsValidCreditCardNumber(cardNumber) {

  var cardType = '';
  if (VisaCardnumber(cardNumber)) {
    cardType = "visa";
  } else if (MasterCardnumber(cardNumber)) {
    cardType = "mastercard";
  } else if (AmexCardnumber(cardNumber)) {
    cardType = "americanexpress";
  } else if (DiscoverCardnumber(cardNumber)) {
    cardType = "discover";
  } else if (DinerClubCardnumber(cardNumber)) {
    cardType = "dinerclub";
  } else if (JCBCardnumber(cardNumber)) {
    cardType = "jcb";
  } else {
  	return ''
  }

  return cardType;
}




exports.validCrediCardNumber = card => {
	return IsValidCreditCardNumber(card) !== ''
}


exports.validCreditCardExpiration = exp => {

	if (exp === null || exp === undefined || exp === '' ){
		return false
	} else if (exp.length !== 4 ){
		return false
	} else {

		let _exp = `${exp}`
		let mo = _exp.substring(0,2)
		let yr = _exp.slice(-2)

		var today, someday;
		var exMonth = parseInt(mo)
		var exYear  = parseInt(yr) + 2000
		today   = new Date();
		someday = new Date();
		someday.setFullYear(exYear, exMonth, 1);

		if (someday < today) {
			return false
		} else {
			return true
		}
	}

}


exports.validCreditCardCVC = exp => {

	if (exp === null || exp === undefined || exp === '' ){
		return false
	} else if (exp.length !== 3 ){
		return false
	} else {
		return true
	}

}










