/**
	@Package: App.js
	@Date   : March 15th, 2021
	@Author : Xiao Ling   
	@Source:
		- https://medium.com/compound-finance/setting-up-an-ethereum-development-environment-7c387664c5fe
		- https://medium.com/coinmonks/node-js-backend-service-for-ethereum-dapp-sotp-part-3-2d3aa5ec50e9

	@Build:
		- npm run build		
		- firebase deploy
*/


import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {withCookies} from 'react-cookie';
import './App.css';

// pages + components
import Navbar      from './pages/components/Navbar';
import Footer      from './pages/components/Footer'
import Profile     from './pages/profile/Profile';
import BidPage     from './pages/bid/BidPage';

import { 
	dbTokenToName, 
	illValued, 
	trivialString, 
	trivialObj, 
	trivialProps,
	swiftNow 
} from './utils/utils'



class App extends Component {

	state = {
		// navigation states
		loggedIn: false,
		signedUp: false,
		isError : false,
		prevURL: "",

		// db references
		user     : {},
		userCache: {},
		userName : "",

		// authed-user states that's lifted up
		// to global scope and passed down to
		// each view as a parameter
		authedUserURL   : '',
		has_credit_card : false,
		has_express_acct: false,
		has_metamask    : false
	}

	// @Use: on component mount, 
	//			- init user cache 
	//          - listen for authed user
	componentDidMount() {
	}

	// @use: Put value into global state store
	putGlobalState = (blob) => {
		if ( illValued(blob) ){ return }
		this.setState(blob)
	}

	/******************************************************
		@auth states
	******************************************************/

	//@Use: initate user at uid, update global states
	mountUser = (token) => {
	}

	
	logOut = () => {
	}

	/******************************************************
		@delegate and global state put
	******************************************************/

	// authed user delegates
	onDidUpdateProfileImage = () => {
		//console.log("authed user did update profile image")
	}

	didConfirmPayment = () => {
		//console.log("authed user did confirm credit card")
	}

	didConfirmStripeExpressAccount = () => {
		//console.log('authed user didConfirmStripeExpressAccount')
	}

	didConfirmMetaMask = () => {
		//console.log('authed user didConfirmMetaMask')
	}
	

	/******************************************************
		@view
	******************************************************/

	render() {
		return (
		  <Router>
		    <React.Fragment>
				<Navbar

					// signup state
					signedUp       = {this.state.signedUp}
					loggedIn       = {this.state.loggedIn}
					logOut         = {this.logOut}

					// user state
					user           = {this.state.user}
					userName       = {this.state.userName}
					authedUserURL  = {this.state.authedUserURL}

					// payment state
					has_credit_card  = {this.state.has_credit_card}
					has_express_acct = {this.state.has_express_acct}
					has_metamask     = {this.state.has_metamask}
				/>		      
				<BidPage //BidPage
					// auth state
					signedUp       = {this.state.signedUp}
					loggedIn       = {this.state.loggedIn}
					isError        = {this.state.isError}

					// user state
					user           = {this.state.user}
					userName       = {this.state.userName}
					authedUserURL  = {this.state.authedUserURL}

					// state fn
					mountUser      = {this.mountUser}
					putGlobalState = {this.putGlobalState}

					// payment state
					has_credit_card  = {this.state.has_credit_card}
					has_express_acct = {this.state.has_express_acct}
					has_metamask     = {this.state.has_metamask}

					// @TODO: get rid of these states
					cookies = {this.props.cookies}
				/>
		      <Footer/>
		    </React.Fragment>
		  </Router>
		);
	}
}

export default withCookies(App);






/*const styles = (theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	},
	progess: {
		position: 'absolute'
	}
});*/


