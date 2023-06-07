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
        shopping, one city at a time.
        <br /> Starting in NYC 🗽🌎 #RetailRevolution
      </Typography>
      <Stack spacing={1}>
        <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
          <BrandIcon />
          <Typography
            variant="body1"
            sx={{ color: "white", textAlign: "center" }}
          >
            Brand? nyc@revolving.store
          </Typography>
        </Stack>
        <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
          <BrandIcon />
          <Typography
            variant="body1"
            sx={{ color: "white", textAlign: "center" }}
          >
            Landlord? landlord@revolving.store
          </Typography>
        </Stack>
        <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
          <BrandIcon />
          <Typography
            variant="body1"
            sx={{ color: "white", textAlign: "center" }}
          >
            Press? ask@revolving.store
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}

export default ComingSoon;
