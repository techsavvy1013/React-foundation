/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Styled } from "theme-ui";
import { Grid, Box, Button } from "theme-ui";
import { Embed } from "theme-ui";
import ReactPlayer from "react-player";

/*  Hero component */

const DetailLeft = (props) => (
  <div bg="">
    <div
      sx={{
        display: "grid",
        gap: 32,
        boxShadow: "rgb(0 0 0 / 5%) 0px 10px 20px",
        borderRadius: 10,
      }}
    >
      <Styled.p sx={{}}>Sold for</Styled.p>
      <h3 sx={{ fontSize: 24, fontWeight: 600 }}>0.75 ETH</h3>
      <div sx={{}}>$1,294.73</div>
      <div sx={{}}>Owned by</div>
      <Button
        ml={30}
        sx={{
          borderRadius: 24,
          backgroundColor: "#ffffff",
          variant: "buttons.radiusHoverButton",
          color: "black",
        }}
      >
        <div
          sx={{
            width: 34,
            height: 34,
            backgroundImage:
              "linear-gradient(135deg, rgb(84, 188, 251), rgb(67, 66, 243))",
            backgroundRepeat: "initial",
            backgroundAttachment: "initial",
            backgroundOrigin: "initial",
            backgroundClip: "initial",
            backgroundColor: "var(--theme-ui-colors-black-5,#F2F2F2)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius: 999,
            marginRight: 20,
          }}
        ></div>
        <p>0x7e3b...35ac</p>
      </Button>
    </div>
  </div>
);

export default DetailLeft;
