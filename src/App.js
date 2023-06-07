// mui
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// components
import Copyright from "./components/Copyright";
// -----------------------------------------------------

function App() {
  return (
    <Container component="main" sx={{ height: "100vh" }}>
      <Typography component="h1" variant="h5" sx={{ color: "white" }}>
        Coming Soon
      </Typography>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

export default App;
