/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Styled } from "theme-ui";
import { Grid, Box, Button } from "theme-ui";
import { Embed } from "theme-ui";
import ReactPlayer from "react-player";

/*  Hero component */

const DetailLeft = (props) => (
  <div bg="primary">
    <Styled.h2 sx={{}}>They Want To Eat Your Beat</Styled.h2>
    <Styled.p sx={{}}>Description</Styled.p>
    <Styled.p sx={{}}>
      NM0131 Yes YOU Now is an original work by Shantell Martin drawn in her
      signature black and white style, showcasing her iconic
      stream-of-consciousness lines in black ink on a white surface. This piece
      was drawn on a flight between New York and Mexico, back when we used to
      travel. This is also Shantell's first NFT on Foundation. #1      NM0131 Yes YOU Now is an original work by Shantell Martin drawn in her
      signature black and white style, showcasing her iconic
      stream-of-consciousness lines in black ink on a white surface. This piece
      was drawn on a flight between New York and Mexico, back when we used to
      travel. This is also Shantell's first NFT on Foundation. #1      NM0131 Yes YOU Now is an original work by Shantell Martin drawn in her
      signature black and white style, showcasing her iconic
      stream-of-consciousness lines in black ink on a white surface. This piece
      was drawn on a flight between New York and Mexico, back when we used to
      travel. This is also Shantell's first NFT on Foundation. #1
    </Styled.p>


    <Button
      width={"100%"}
      height={50}
      sx={{
        borderRadius: 8,
        backgroundColor: "white",
        variant: "buttons.radiusHoverButton",
        width: "50vh",
        margin: "0 auto",
        color: "black",
        display: "flex",
        justifyContent: "space-between",
      }}
    >


    </Button>
  </div>
);

export default DetailLeft;
