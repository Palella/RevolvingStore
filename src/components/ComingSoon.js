// mui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";
// component
import Logo from "./Logo";
import BrandIcon from "./BrandIcon";
// -----------------------------------------------------

function ComingSoon() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Logo sx={{ mb: 6 }} />
      <Typography
        variant="body1"
        sx={{ color: "white", textAlign: "center", mb: 4 }}
      >
        Where disruption meets retail.
        <br /> Revolutionizing shopping, one city at a time.
        <br /> Starting in NYC 🗽🌎 <br />
        #RetailRevolution
      </Typography>
      <Stack spacing={1}>
        <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
          <BrandIcon />
          <Typography
            variant="body1"
            sx={{ color: "white", textAlign: "center" }}
          >
            Brand? <a href="mailto:nyc@revolving.store">nyc@revolving.store</a>
          </Typography>
        </Stack>
        <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
          <BrandIcon />
          <Typography
            variant="body1"
            sx={{ color: "white", textAlign: "center" }}
          >
            Landlord?{" "}
            <a href="mailto:landlord@revolving.store">
              landlord@revolving.store
            </a>
          </Typography>
        </Stack>
        <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
          <BrandIcon />
          <Typography
            variant="body1"
            sx={{ color: "white", textAlign: "center" }}
          >
            Press? <a href="mailto:ask@revolving.store">ask@revolving.store</a>
          </Typography>
        </Stack>
      </Stack>
      <Box
        sx={{
          mt: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href="http://twitter.com/revolvingstore"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon sx={{ color: "white", fontSize: 40 }} />
        </a>
      </Box>
    </Container>
  );
}

export default ComingSoon;
