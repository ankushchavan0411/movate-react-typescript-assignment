/** @format */
import Container from "@mui/material/Container";
import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/header";
import store from "./redux/store";
import Pages from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Container>
        <Pages />
      </Container>
      <Footer />
    </Provider>
  );
}

export default App;
