// mui
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// component
import Logo from "./Logo";
import BrandIcon from "./BrandIcon";
// -----------------------------------------------------

function ComingSoon() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Logo sx={{ mb: 4 }} />
      <Typography
        variant="body1"
        sx={{ color: "white", textAlign: "center", mb: 2 }}
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
              andlord@revolving.store
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
    </Container>
  );
}

export default ComingSoon;
