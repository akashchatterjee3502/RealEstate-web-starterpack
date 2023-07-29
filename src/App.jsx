import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import './App.css';
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      <Companies/>
      </div>
      <Residencies/>
      <Value/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
