/*
  @Package: Footer.js
  @Date   : March 15th, 2021
  @Author : Xiao Ling
*/

import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {FaSearch, FaCommentDots} from 'react-icons/fa'
import styled from 'styled-components'
import {Dropdown} from 'react-bootstrap'
import AVATAR from '../../assets/img/avatar.png'
///https://editor.method.ac/
import LOGO from '../../assets/img/whisper-logo.png'
import "./styles.css"

/******************************************************
	Views
******************************************************/

const Linked = styled(Link)`
  textDecoration: none;
  display: inline-block;
  padding: 20px;
  color: black;
  &:hover {
  color: black;
  text-decoration: underline;
  }
`

function NavLink(props) {
  return (
  <li  className="navbar-item">
	<Linked to={props.to}>
	{props.children}
	</Linked>
  </li>
  )
}

function UserProfile(props) {
  return (
  	<img src={AVATAR} alt="profile" className="img-circle" style={{maxWidth: '30%'}}/>
  );
}

function NotLoggedInLink(props) {
	return (
		<React.Fragment>
			<NavLink to="/" getStyle={props.getStyle}>
			  Draft a Charter
			</NavLink>
			<NavLink to="/explore" getStyle={props.getStyle} >
			  Explore
			</NavLink>
			<NavLink to="/signup" getStyle={props.getStyle}>
			  Sign up
			</NavLink>
			<NavLink to="/login" getStyle={props.getStyle}>
			  Log in
			</NavLink>
		</React.Fragment>
	)
}


function LoggedInLink(props) {
 	return (
		<React.Fragment>
			<NavLink to="/home" getStyle={props.getStyle}>
			</NavLink>
			<NavLink to="/home" getStyle={props.getStyle}>
			</NavLink>
			<li>
				<Dropdown>
					<Dropdown.Toggle 
						style={{
						backgroundColor: 'white',
						border: 'none',
						color: 'white',
						padding: '19px'}}>
						<UserProfile />
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Header>
							"More"
						</Dropdown.Header>
						<Dropdown.Divider />
						<Dropdown.Item href="/">
							My Page
						</Dropdown.Item>
						<Dropdown.Item href={`/users/profile/${props.userName}`}>
							Profile
						</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item href="/" onClick={props.logOut}>
							Logout
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</li>
		</React.Fragment>
	)
}



/******************************************************
	Class
******************************************************/


export default class NavBar extends Component {

	getStyle = {
		navbar: {
			position: 'fixed',
			display: "flex",
			width: "100%",
			justifyContent: "space-between",
			boxShadow: '0px 0px 2px grey',
			zIndex: 100,
			backgroundColor: 'white'
		},
		navbarBrand: {
			paddingLeft: '15px' 
		},
		navbarMenu: {
			display: 'flex',
			margin: '0',
			padding: '0',
			listStyle: 'none',
		},
		navbarItem: {
			textDecoration: 'none',
			display: 'inline-block',
			padding: '20px',
			color: 'black',
			'& @media screen and (max-width: 600px)' : {
			}
		}
	}

	render() {
		return (
			<nav style={this.getStyle.navbar}>
				<div style={this.getStyle.navbarBrand}>
					<img src={LOGO} className="img-circle" style={{maxWidth: '100%'}}/>
				</div>
				<ul style={this.getStyle.navbarMenu} className="navbar-menu">
					{this.props.signedUp ? (
					  <LoggedInLink 
						getStyle = {this.getStyle} 
						logOut   = {this.props.logOut} 
						userName = {this.props.userName}
						user     = {this.props.user}
					  />
					) : (
					  <NotLoggedInLink getStyle={this.getStyle} />
					)}
				</ul>
			</nav>
		)
	}
}

