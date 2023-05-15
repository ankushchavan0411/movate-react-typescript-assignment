/** @format */
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Pages from "./routes";
import Container from "@mui/material/Container";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Pages />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
