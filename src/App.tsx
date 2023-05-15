/** @format */
import Container from "@mui/material/Container";
import React from "react";
import { Provider } from "react-redux";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import store from "./redux/store";
import Pages from "./routes";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Header />
        <Container>
          <Pages />
        </Container>
        <Footer />
      </Provider>
    </React.Fragment>
  );
}

export default App;
