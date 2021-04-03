/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx } from "theme-ui";
import { Button } from "react-bootstrap";

const getStyle = {
  detailInfo: {
    paddingRight: 32,
    marginRight: 32,
    borderRight: "solid 1px",
    borderColor: "var(--theme-ui-colors-black-10,#E6E6E6)",
  },
  fontParagraph: {
    fontSize: "1.4rem",
    color: "grey",
  },
  detailRightWrapper: {
    padding: 20,
    borderBottom: "solid 1px",
    borderColor: "#E6E6E6",
    marginBottom: 20,
  },
  detailPrice: {
    paddingRight: 32,
    borderRight: "solid 1px",
    borderColor: "var(--theme-ui-colors-black-10,#E6E6E6)",
  },
  detailDescription: {
    paddingLeft: 50,
  },
  btnPlacebid: {
    width: "100%",
    padding: 20,
    textAlign: "center",
    border: 0,
    marginBottom:40,
    borderRadius: 4,
    willChange: "transform",
    fontFamily:
      "Roobert,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
    fontWeight: 600,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 15,
    WebkitTransition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
    transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
    cursor: "pointer",
    outline: "none",
    backgroundColor: "#000000",
    color: "#FFFFFF",
    border: "solid 2",
    borderColor: "#1A1A1A",
    minHeight: 60,
    ':hover': {
      backgroundColor: "#000000",
      color: "#FFFFFF",
      boxShadow: "0px 8px 15px rgb(0 0 0 / 25%)",
      WebkitTransform: "translateY(-2px)",
      MsTransform: "translateY(-2px)",
      transform: "translateY(-2px)",
    },
  },
};
const DetailRight = (props) => (
  <React.Fragment>
    <div className="container detailRight" >
      <div className="row " style={getStyle.detailRightWrapper}>
        <div className="col-md-5 " style={getStyle.detailPrice}>
          <h6>Reserve Price</h6>
          <h4>1.969 ETH</h4>
          <h5>$3,056.35</h5>
        </div>
        <div className="col-md-7 " style={getStyle.detailDescription}>
          <p>
            Once a bid has placed and the reserve price has been set, a 24 hour
            auction for this artwork will begin.
          </p>
        </div>
      </div>
      <button className="" style={getStyle.btnPlacebid}>Place a bid</button>
    </div>
  </React.Fragment>
);



export default DetailRight;


/*
function SectionBid(props) {
  return (
    <React.Fragment>

      <div className="row">
        <div className="col-md-5">
          <h3 style={props.getStyle.fontHello}>PRICE</h3>
        </div>
        <div className="col-md-4"><br />
          <p style={props.getStyle.fontParagraph} className="mt-5">
            community value satement is here, along with a prospective on what people are paying for.
         </p>
        </div>
      </div>

      <Button variant="info" size="lg" type="submit" block>
        Reserve a spot
  </Button>
    </React.Fragment>
  )
}

*/