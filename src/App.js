import React, { Component } from 'react';
import Card from './components/Card';
import images from './images/images';

import './App.js';

class App extends Component {
  render() {
    const data = [
      {"title": "Nike", "price": 300, "image": images[0]},
      {"title": "Adidas", "price": 400, "image": images[1]},
      {"title": "Puma", "price": 500, "image": images[2]},
      {"title": "UCB", "price": 600, "image": images[3]},
      {"title": "Bata", "price": 700, "image": images[1]},
      {"title": "Kobler", "price": 300, "image": images[0]},
    ];
    return (
      <div className="App container">
        <div className="row">
        {data.map((item,index)=> {
           return <Card key={index} title={item.title} price = {item.price} image = {item.image} />;
        })}

        </div>
      </div>
    );
  }
}

export default App;