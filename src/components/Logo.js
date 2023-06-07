import React from "react";
// mui
import Box from "@mui/material/Box";
// -----------------------------------------------------

function Logo(props) {
  return (
    <Box {...props}>
      <img
        width="240px"
        src={process.env.PUBLIC_URL + "/images/brand/white_logo.png"}
        alt="white logo"
      />
    </Box>
  );
}

export default Logo;
