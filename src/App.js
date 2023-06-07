// mui
import Container from "@mui/material/Container";
// components
import SEO from "./components/SEO";
import ComingSoon from "./components/ComingSoon";
import Copyright from "./components/Copyright";
// -----------------------------------------------------

function App() {
  return (
    <>
      <SEO title="Revolving Store Inc" />
      <Container
        component="main"
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <ComingSoon />
        <Copyright sx={{ mt: "auto", mb: 4 }} />
      </Container>
    </>
  );
}

export default App;
