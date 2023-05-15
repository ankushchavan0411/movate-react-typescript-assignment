/** @format */
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Pages from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
