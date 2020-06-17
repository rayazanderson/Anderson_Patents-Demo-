import React from 'react';
import Img from './images/anderson_patents.png';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Anderson Patents',
      headerLinks: [
        { title: 'home', path: '/' },
        { title: 'about', path: '/about' },
        { title: 'work', path: '/work' },
        { title: 'contact', path: '/contact' }
      ],
      home: {
        title: 'Protect your Creativity',
        subTitle: 'Own your Ideas',
        text: 'Checkout my services'
      },
      about: {
        title: 'About Me',
        subTitle: 'Own your Ideas',
        text: 'Checkout my services'
      },
      work: {
        title: 'What I have done',
        subTitle: 'Own your Ideas',
        text: 'Checkout my services'
      },
      contact: {
        title: 'Contact Me Here',
        subTitle: 'Own your Ideas',
        text: 'Checkout my services'
      },
    }
  }

  render() {
    return (
      <div> <center>< img src={Img} alt="pic" /></center> </div>
    );
  }
}

export default App;
