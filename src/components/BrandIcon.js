import React from "react";
// mui
import Box from "@mui/material/Box";
// -----------------------------------------------------

function BrandIcon(props) {
  return (
    <Box {...props}>
      <img
        width="24px"
        src={process.env.PUBLIC_URL + "/images/brand/icon.png"}
        alt="brand icon"
      />
    </Box>
  );
}

export default BrandIcon;
