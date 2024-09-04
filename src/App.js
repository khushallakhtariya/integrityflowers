import "./App.css";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Slider from "./Components/Slider";
import Shopping from "./Components/Shopping";
import View from "./Components/View";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <Content />
      <Shopping />
      <View />
      <Footer />
    </div>
  );
}

export default App;
