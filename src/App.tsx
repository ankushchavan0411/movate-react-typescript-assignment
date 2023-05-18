/** @format */
import Container from "@mui/material/Container";
import { Provider } from "react-redux";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import store from "./redux/store";
import Pages from "./routes";

function App() {
  return (
    <Container>
      <Provider store={store}>
        <Header />
        <Pages />
        <Footer />
      </Provider>
    </Container>
  );
}

export default App;
