/*
	source:
		- https://freefrontend.com/bootstrap-profiles/
		- https://uicookies.com/bootstrap-profile-page/
		- https://www.bootdey.com/snippets/tagged/profile
		- https://www.codeinwp.com/blog/react-ui-component-libraries-frameworks/
*/

import React, { Component } from "react";
import styled from "styled-components";
import "./Bidpage.css";
import "../components/styles.css";

// https://github.com/jakehartnell/react-images-upload#readme
import {
  Card,
  Form,
  Image,
  Row,
  Col,
  Button,
  Container,
} from "react-bootstrap";

import LazyHero from "react-lazy-hero";
import UserProfile from "react-user-profile";

import Detail from "./detail";

import DetailRight from "./DetailRightActive";

/******************************************************
	@use: fragments
******************************************************/

function SectionAbout(props) {
  return (
    <React.Fragment>
      <h2 style={props.getStyle.fontHello}>COMMUNITY NAME</h2>
      <p style={props.getStyle.fontParagraph} className="mt-5">
        community value satement is here, along with a prospective on what
        people are paying for. community value satement is here, along with a
        prospective on what people are paying for. community value satement is
        here, along with a prospective on what people are paying for. community
        value satement is here, along with a prospective on what people are
        paying for. community value satement is here, along with a prospective
        on what people are paying for. community value satement is here, along
        with a prospective on what people are paying for. community value
        satement is here, along with a prospective on what people are paying
        for.
      </p>
      {/* <button className="btn btn-danger mt-2" style={props.getStyle.helloButton}>Bid</button>*/}
    </React.Fragment>
  );
}

function SectionBio(props) {
  return (
    <React.Fragment>
      <div className="container sectionCreator" style={{ padding: 45 }}>
        <div className="row creator-title"> Creator </div>
        <div className="col-6 creator-shortdesc row">
          <a href="#">
            <div className="creator-image" />
          </a>
          <div>
            <a className="creator-name">OBI-WAN COINOBI</a>
            <div className="creator-name-block">
              <a style={{ display: "block" }}>
                <div className="creator-id">OBIOBI</div>
              </a>
            </div>
          </div>
        </div>
        <p style={props.getStyle.fontParagraph} className="mt-4">
          Nicole Ruggiero is a 3D visual artist based in NYC. Her work
          concentrates on technology and the culture surrounding it. Her recent
          work explores themes like the ambiguous nature of technology, digital
          emotions and power, environmentalism, and escapism. Nicole has
          exhibited globally and collaborated on music videos for Lady Gaga,
          Calvin Harris and The Weeknd, and Rico Nasty. She has also recently
          created original artwork for brands such as Adult Swim and New York
          Times and was recently featured in Die Ziet, High Snobiety, and on the
          cover of Kunstforum.
        </p>
      </div>
      {/* <button className="btn btn-danger mt-2" style={props.getStyle.helloButton}>Bid</button>*/}
    </React.Fragment>
  );
}

/*
	@Use: creator bio
	@TODO: need to add image
*/
function SectionBio2(props) {
  return (
    <React.Fragment>
      <div className="container" style={{ maxWidth: "90%", padding: 45 }}>
        <div className="row creator-title">Creator</div>
        <div className="row creator">
          <div className="col-6 creator-shortdesc row">
            <a href="#">
              <div className="creator-image" />
            </a>
            <div>
              <a className="creator-name">OBI-WAN COINOBI</a>
              <div className="creator-name-block">
                <a style={{ display: "block" }}>
                  <div className="creator-id">OBIOBI</div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-6" style={{ fontSize: 24 }}>
            Nicole Ruggiero is a 3D visual artist based in NYC. Her work
            concentrates on technology and the culture surrounding it. Her
            recent work explores themes like the ambiguous nature of technology,
            digital emotions and power, environmentalism, and escapism. Nicole
            has exhibited globally and collaborated on music videos for Lady
            Gaga, Calvin Harris and The Weeknd, and Rico Nasty. She has also
            recently created original artwork for brands such as Adult Swim and
            New York Times and was recently featured in Die Ziet, High Snobiety,
            and on the cover of Kunstforum.
          </div>
        </div>
      </div>
      {/* <p style={props.getStyle.fontBioParagraph} className="mt-5">
				Nicole Ruggiero is a 3D visual artist based in NYC. Her work concentrates on technology and the culture surrounding it. Her recent work explores themes like the ambiguous nature of technology, digital emotions and power, environmentalism, and escapism. Nicole has exhibited globally and collaborated on music videos for Lady Gaga, Calvin Harris and The Weeknd, and Rico Nasty. She has also recently created original artwork for brands such as Adult Swim and New York Times and was recently featured in Die Ziet, High Snobiety, and on the cover of Kunstforum.
      </p> */}
      {/* <button className="btn btn-danger mt-2" style={props.getStyle.helloButton}>Bid</button>*/}
    </React.Fragment>
  );
}

function SectionBidItem(props) {
  return (
    <React.Fragment>
      <li className="list-group-item bidItem">
        <a href="/ZafGod" className="css-zejcqm">
          <div />
        </a>
        <div className="description pl-3">
          <div className="description-row1">
            Bid placed by
            <a href="#">
              <span>ZafGod</span>
            </a>
          </div>
          <div>
            <span className="css-v7lm6">Mar 11, 2021 at 4:25pm</span>
          </div>
        </div>
        <Row className="action ">
          <Col md={10}>
            <div className="action-desc-1">5.50 ETH</div>
            <div className="action-desc-2">$9,755.13</div>
          </Col>
          <Col md={2}>
            <a href="#" style={{ lineHeight: "50px" }}>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                className="css-13o7eu2"
              >
                <path
                  d="M15 0H8v2h4.6L6.3 8.3l1.4 1.4L14 3.4V8h2V1c0-.6-.4-1-1-1z"
                  fill="currentColor"
                />
                <path
                  d="M14 16H1c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h4v2H2v11h11v-3h2v4c0 .6-.4 1-1 1z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </Col>
        </Row>
      </li>
    </React.Fragment>
  );
}

function SectionBidList(props) {
  return (
    <React.Fragment>
      <div className="container sectionBid" style={{ padding: 45 }}>
        <div className="row creator-title">Bids</div>
        <ul className="list-group bidList">
          <SectionBidItem getStyle={props.getStyle} />
          <SectionBidItem getStyle={props.getStyle} />
        </ul>
      </div>
    </React.Fragment>
  );
}

function SectionBidList2(props) {
  return (
    <React.Fragment>
      <div className="container sectionBid" style={{ padding: 45 }}>
        <div className="row creator-title">Bids</div>
        <ul className="list-group bidList">
          <SectionBidItem getStyle={props.getStyle} />
          <SectionBidItem getStyle={props.getStyle} />
        </ul>
      </div>
    </React.Fragment>
  );
}

function SectionBidListCenter(props) {
  return (
    <React.Fragment>
      <Container style={{ maxWidth: "50%" }}>
        <ul className="list-group bidList">
          <SectionBidItem getStyle={props.getStyle} />
          <SectionBidItem getStyle={props.getStyle} />
        </ul>
      </Container>
    </React.Fragment>
  );
}

function SectionBid2(props) {
  return (
    <React.Fragment>
      <div className="container detailRight">
        <div className="row detailRightWrapper">
          <div className="col-md-4 detailPrice">
            <h6>Current Bid</h6>
            <h4>1.969 ETH</h4>
            <h6 className="smlightdark">$3,056.35</h6>
          </div>
          <div className="col-md-8 detailDescription">
            <h6>Auction ending in</h6>
            <div className="row m-0">
              <h4 className="fixedwidth">33</h4>
              <h4 className="fixedwidth">33</h4>
              <h4 className="fixedwidth">33</h4>
            </div>
            <div className="row m-0">
              <h6 className="fixedwidth smlightdark">Hours</h6>
              <h6 className="fixedwidth smlightdark">Minutes</h6>
              <h6 className="fixedwidth smlightdark">Seconds</h6>
            </div>
          </div>
        </div>
        <button className="btnPlacebid">Place a bid</button>
        <p style={props.getStyle.finePrintParagraph}>
          Top 10 bidders receive loresum ipsum Top 10 bidders receive loresum
          ipsum Top 10 bidders receive loresum ipsum Top 10 bidders receive
          loresum ipsum
        </p>
      </div>
    </React.Fragment>
  );
}

/******************************************************
	@use: class
******************************************************/

export class BidPage extends Component {
  state = {
    oldusername: this.props.pathParam,
    full_name: "",
    create: "",
    creating: "",
  };

  handleChange = (e) => {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  handleRadioChange = (e) => {
    this.setState({
      creating: e.target.value,
    });
  };

  getStyle = {
    fontHello: {
      fontWeight: "900",
      fontSize: "3rem",
    },
    fontPledges: {
      fontWeight: "900",
      fontSize: "2rem",
    },
    finePrintParagraph: {
      fontSize: "1rem",
      color: "grey",
    },
    fontParagraph: {
      fontSize: "1.4rem",
      color: "grey",
    },
    fontBioParagraph: {
      fontSize: "1.4rem",
      color: "black",
    },
    helloButton: {
      borderRadius: "20px",
      padding: "10px 20px",
    },
    fontCreator: {
      fontWeight: "700",
      fontSize: "2.5rem",
    },
    cardSmoke: {
      backgroundColor: "whitesmoke",
      border: "none",
    },
    backgroundVideoImage: {
      backgroundImage:
        "url(https://c5.patreon.com/external/marketing/vertical_images/video-v4-issarae.jpg)",
      width: "100%",
      backgroundPosition: "center center",
      backgroundSize: "cover",
    },
    videoImageLink: {
      display: "block",
      padding: "5px",
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "black",
    },

    /*
     * Bid List Styles
     */

    bidList: {
      gap: 16,
      width: "100%",
    },

    bidItem: {
      display: "grid",
      paddingLeft: 24,
      paddingRight: 24,
      gridTemplateColumns: "44px 4fr 2fr",
      border: 0,
      "::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        zIndex: -1,
        boxShadow: "rgb(0 0 0 / 5 %) 0px 10px 20",
        borderRadius: 10,
      },
      backgroundColor: "whitesmoke",
    },
  };

  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        {/*https://github.com/danistefanovic/react-lazy-hero/blob/master/website/src/components/App.js*
				<LazyHero
					imageSrc="https://unsplash.it/2000/1000"
					opacity={0.0}
				/>*/}

        <div className="row pt-5">
          <div className="col-sm-12 pt-5 pl-5 pr-5 col-xl-6">
            <SectionAbout getStyle={this.getStyle} />
          </div>
          <div className="col-sm-12 pl-5 pr-5 col-xl-6">
            <br />
            <SectionBid2 getStyle={this.getStyle} /> {/* <DetailRight ... /> */}
          </div>
        </div>

        <SectionBio getStyle={this.getStyle} />

        <SectionBidList2 getStyle={this.getStyle} />
      </React.Fragment>
    );
  }
}

export default BidPage;
