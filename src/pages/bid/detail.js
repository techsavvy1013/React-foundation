// I am sure you already know the skype.
// Here's my skype id which I would like you to add on your skype.
// techsavvy1013@outlook.com

// Writing above sentences on chatting could suspend my account. Sorry for this way...
// In fact no updates...


/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Component } from 'react'
import { jsx, Styled } from "theme-ui";
import { Grid, Box, Button } from "theme-ui";
import { Embed } from "theme-ui";
import ReactPlayer from "react-player";
import DetaiLeft from "./detailLeft";
import DetailRight from "./detailRight";



/*  Detail component */

const Detail = (props) => (
  <div sx={{ p: 20 }}>
    <Grid gap={48} columns={[2, "1fr 1fr"]}>
      <DetaiLeft/>
      <DetailRight/>
    </Grid>
  </div>
);



export default Detail;
