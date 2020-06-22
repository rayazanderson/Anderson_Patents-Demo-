import React from "react";

import Card from "../components/Card";
import gavel from "../assets/images/gavel.jpg";
import engineering from "../assets/images/engineering.jpg";
import office from "../assets/images/office.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

/*These are just prop images, once I get the custom edits in I can just add the companies who worked for you on the home page*/

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Law",
          subTitle: "Keeping your ideas yours and yours alone",
          imgSrc: gavel,
          selected: false,
        },
        {
          id: 1,
          title: "Engineering",
          subTitle: "protected hardware and software ideas for decades",
          imgSrc: engineering,
          selected: false,
        },
        {
          id: 2,
          title: "Office",
          subTitle: "We work together to make what's yours is yours",
          imgSrc: office,
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
