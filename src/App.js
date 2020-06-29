import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Works from "./pages/Works/Works";
import Contact from "./pages/Contact";
import GlobalStyle from "./styles/Global";

class App extends React.Component {
  state = {
    navbarOpen: false,
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  constructor(props) {
    super(props);
    this.state = {
      title: "Anderson Patents",
      headerLinks: [
        { title: "home", path: "/" },
        { title: "about", path: "/about" },
        { title: "work", path: "/work" },
        { title: "contact", path: "/contact" },
      ],
      home: {
        title: "Welcome to Anderson Patents",
        subTitle: "Protect your Creativity",
        text: "Own your Ideas",
      },
      about: {
        title: "About Me",
        subTitle: "Protect your Creativity",
        text: "test",
      },
      works: {
        title: "Services I provide",
      },
      contact: {
        title: "Contact Me Here",
      },
    };
  }

  render() {
    return (
      <Router>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
        <Route
          path="/"
          exact
          render={() => (
            <Home
              title={this.state.home.title}
              subTitle={this.state.home.subTitle}
              text={this.state.home.text}
            />
          )}
        />
        {/* <Route
          path="/about"
          render={() => <About title={this.state.about.title} />}
        />
        <Route
          path="/works"
          render={() => <Works title={this.state.works.title} />}
        />
        <Route
          path="/contact"
          render={() => <Contact title={this.state.contact.title} />}
        /> */}
        {/* <About />
        <Works />
        <Contact /> */}
        <Footer />
      </Router>
    );
  }
}

export default App;
