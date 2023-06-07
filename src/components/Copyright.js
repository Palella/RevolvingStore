// mui
import Typography from "@mui/material/Typography";
// -----------------------------------------------------

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {"© "}
      {new Date().getFullYear()}
      {"  "}Revolving Store Inc. 293 Church St New York, NY 10013
    </Typography>
  );
}

export default Copyright;
