import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import Container from "@material-ui/core/Container";
import GlobalStyle from "./styles/Global";
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
        subTitle: "Own your Ideas",
        text: "Checkout my services",
      },
      work: {
        title: "What I have done",
        subTitle: "Own your Ideas",
        text: "Checkout my services",
      },
      contact: {
        title: "Contact Me Here",
        subTitle: "Own your Ideas",
        text: "Checkout my services",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0">
          <Navbar
            navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar}
          />
          <GlobalStyle />
          <Route
            path="/"
            exact
            render={() => <Home title={this.state.home.title} />}
          />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
