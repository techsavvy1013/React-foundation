/*
  source:
    - https://freefrontend.com/bootstrap-profiles/
    - https://uicookies.com/bootstrap-profile-page/
    - https://www.bootdey.com/snippets/tagged/profile
    - https://www.codeinwp.com/blog/react-ui-component-libraries-frameworks/
*/

import React, { Component } from "react";
import styled from "styled-components";
import "./../bid/Bidpage.css";

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

import Detail from "./../bid/detail";
import DetailRight from "./../bid/DetailRightActive";

/******************************************************
  @use: fragments
******************************************************/

function SectionBio(props) {
  return (
    <React.Fragment>
      <div className="container" style={{ maxWidth: "88%", padding: 45 }}>
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

//<item ...props/>

function ImageList(props) {
  return (
    <React.Fragment>
      <div className="container" style={{ maxWidth: "80%", padding: 0 }}>
        <div className="css-1fjs75c">
          {/* <div className="col-md-3 col-sm-4 col-xs-12 row"> */}
          <ImageItem
            URL={"blob:https://foundation.app/326907dd-815a-44c1-809f-cc4e64cca28c"}
            creatorURL={'url("https://f8n-production.imgix.net/creators/profile/iyxgq78iz-screenshot-2021-03-22-at-22-15-30-png-a2sc3u.png?fit=fill&amp;q=80&amp;w=68&quot")'}
            creatorName={"@starlink"}
            price={"0.10"}
            EndingIn={"blob:https://foundation.app/326907dd-815a-44c1-809f-cc4e64cca28c"}
          ></ImageItem>
          <ImageItem
            URL={"blob:https://foundation.app/326907dd-815a-44c1-809f-cc4e64cca28c"}
            creatorURL={'url("https://f8n-production.imgix.net/creators/profile/iyxgq78iz-screenshot-2021-03-22-at-22-15-30-png-a2sc3u.png?fit=fill&amp;q=80&amp;w=68&quot")'}
            creatorName={"@starlink"}
            price={"0.10"}
            EndingIn={"blob:https://foundation.app/326907dd-815a-44c1-809f-cc4e64cca28c"}
          ></ImageItem>
          <ImageItem
            URL={"blob:https://foundation.app/326907dd-815a-44c1-809f-cc4e64cca28c"}
            creatorURL={'url("https://f8n-production.imgix.net/creators/profile/iyxgq78iz-screenshot-2021-03-22-at-22-15-30-png-a2sc3u.png?fit=fill&amp;q=80&amp;w=68&quot")'}
            creatorName={"@starlink"}
            price={"0.10"}
            EndingIn={"blob:https://foundation.app/326907dd-815a-44c1-809f-cc4e64cca28c"}
          ></ImageItem>
          <ImageItem
            URL={"blob:https://foundation.app/326907dd-815a-44c1-809f-cc4e64cca28c"}
            creatorURL={'url("https://f8n-production.imgix.net/creators/profile/iyxgq78iz-screenshot-2021-03-22-at-22-15-30-png-a2sc3u.png?fit=fill&amp;q=80&amp;w=68&quot")'}
            creatorName={"@starlink"}
            price={"0.10"}
            EndingIn={"blob:https://foundation.app/326907dd-815a-44c1-809f-cc4e64cca28c"}
          ></ImageItem>
          <ImageItem
            URL={"blob:https://foundation.app/326907dd-815a-44c1-809f-cc4e64cca28c"}
            creatorURL={'url("https://f8n-production.imgix.net/creators/profile/iyxgq78iz-screenshot-2021-03-22-at-22-15-30-png-a2sc3u.png?fit=fill&amp;q=80&amp;w=68&quot")'}
            creatorName={"@starlink"}
            price={"0.10"}
            EndingIn={"blob:https://foundation.app/326907dd-815a-44c1-809f-cc4e64cca28c"}
          ></ImageItem>
        </div>
        {/* </div> */}
      </div>
    </React.Fragment>
  );
}

/**
 * props: {URL:STRING, creatorURL,  creatorName, price:int, EndingIn:Int}*
 */
function ImageItem(props) {
  return (
    <React.Fragment>
      <a className="imageItem">
        <div className="css-i9l3dq">
          <div className="css-tmeqbf"></div>
          <div className="imageItemVideo">
            <video
              className="css-f88728"
              loop=""
              src={props.URL}
              poster="https://image.mux.com/HRsEB4YoPGKXZaUW4iExn6Oij5OSV8WtUdfxCarT02gg/thumbnail.jpg"
              autoplay=""
              playsinline=""
              style={{ opacity: 1 }}
            ></video>
          </div>
        </div>

        <div className="imageItemDescription">
          <div className="imageItemDescriptionTitle">Cyberdelic Fountain</div>
          <div className="imageItemDescriptionUser">
            <div
              className="css-fvc15"
              style={{
                backgroundImage: props.creatorURL
              }}
            ></div>
            <div className="imageItemDescriptionUserId">{props.creatorName}</div>
          </div>
        </div>

        <div className="imageItemValue">
          <div className="css-938kgt">Sold for</div>
          <div className="css-ow7ofa">{props.price} ETH</div>
        </div>
      </a>
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
    },
  };

  render() {
    return (
      <React.Fragment>
        {/*https://github.com/danistefanovic/react-lazy-hero/blob/master/website/src/components/App.js*/}
        <LazyHero imageSrc="https://unsplash.it/2000/1000" opacity={0.0} />

        <SectionBio getStyle={this.getStyle} />
        <ImageList getStyle={this.getStyle} />
      </React.Fragment>
    );
  }
}

export default BidPage;
