import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Contact from "./components/pages/Contact/Contact";
import {ProviderLanguage} from "./Providers/LanguageContext";

function App() {
  return (
      <ProviderLanguage>
          <BrowserRouter>
              <div className="App">
                  <Header/>
                  <Switch>
                      <Route path="/home" component={Home}/>
                      <Route path="/about" component={About}/>
                      <Route path="/portfolio" component={Portfolio}/>
                      <Route path="/contact" component={Contact}/>
                      <Redirect to="/home"/>
                  </Switch>
                  <Footer/>
              </div>
          </BrowserRouter>
      </ProviderLanguage>

  );
}

export default App;
