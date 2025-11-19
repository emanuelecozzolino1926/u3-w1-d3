import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import SingleBook from "./components/SingleBook";
import FantasyBook from "./components/FantasyBook";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Welcome />
      <SingleBook />
      <FantasyBook />
      <Footer />
    </>
  );
}

export default App;
