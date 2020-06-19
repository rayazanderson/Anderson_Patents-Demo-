import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

import Container from "@material-ui/core/Container";
import GlobalStyle from "./styles/Global";
import { spacing } from "@material-ui/system";
// Remember to add some framer motion for the frame transitions
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
        title: "Protect your Creativity",
        subTitle: "Own your Ideas",
        text: "Checkout my services",
      },
      about: {
        title: "About Me",
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
        <Container className="pt-5">shhhh I'm a Secret</Container>
        <Container className="mt-5">
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
          <Route
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
          />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
