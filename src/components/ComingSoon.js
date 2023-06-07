// mui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// component
import Logo from "./Logo";
// -----------------------------------------------------

function ComingSoon() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        minHeight: "60vh",
        mt: "20vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Logo sx={{ mb: 4 }} />
      <Typography
        variant="body1"
        sx={{ color: "white", textAlign: "center", mb: 2 }}
      >
        Revolving Store: Where disruption meets retail. Revolutionizing
        shopping, one city at a time. Starting in NYC 🗽🌎 #RetailRevolution
      </Typography>
      <Box>
        <Typography
          variant="body1"
          sx={{ color: "white", textAlign: "center" }}
        >
          Brand? nyc@revolving.store
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "white", textAlign: "center" }}
        >
          Landlord? landlord@revolving.store
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "white", textAlign: "center" }}
        >
          Press? ask@revolving.store
        </Typography>
      </Box>
    </Container>
  );
}

export default ComingSoon;
