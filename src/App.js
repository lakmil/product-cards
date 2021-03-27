import React, { Component } from 'react';
import Card from './components/Card';
import images from './images/images';
import Filters from './components/Filters';

import './App.js';

class App extends Component {

   data = [
    {"title": "Nike", "category": "running", "price": 300, "image": images[0]},
    {"title": "Adidas","category": "running", "price": 400, "image": images[1]},
    {"title": "Puma","category": "casual", "price": 500, "image": images[2]},
    {"title": "UCB","category": "casual", "price": 600, "image": images[3]},
    {"title": "Bata","category": "formal", "price": 700, "image": images[1]},
    {"title": "Kobler","category": "formal", "price": 300, "image": images[0]},
  ];
  
  state = {
    data: [],
    minPrice: 0,
    maxPrice: 1000,
    selectedCategories: [],
  }

  componentDidMount = () => {
    this.setState({
      data: this.data
    })
  }

  minPriceChange = (val) => {
    this.setState({
      minPrice: val
    })
  }
  maxPriceChange = (val) => {
    this.setState({
      maxPrice: val
    })
  }

  getCategoriesList = () => {
    const result = [];
    this.state.data.forEach(item => {
      if(!result.includes(item.category))
        result.push(item.category)
    })

    return result;
  }

  onCategoryClick = (category) => {
    console.log(category)
    this.setState(prevState => {
      const isPresent = prevState.selectedCategories.includes(category);
      let result = [];
      if(isPresent) {
        result = prevState.selectedCategories.filter(item => item !== category);
      } else {
        result = prevState.selectedCategories.concat(category)
      }

      return {
        selectedCategories: result
      }
    })
  }
  render() {

    return (
      <div className="App container">
       <Filters minPrice={this.state.minPrice} maxPrice={this.state.maxPrice} 
       data={this.getCategoriesList()}
       selectedCategories={this.state.selectedCategories}
       onMinPriceChange={this.minPriceChange}
       onMaxPriceChange={this.maxPriceChange}
       val = {this.onCategoryClick}
       />
        <div className="row">
        {
          !this.state.selectedCategories.length ? 
          this.state.data.filter((item => this.state.minPrice && this.state.maxPrice ? 
          item.price >= this.state.minPrice && 
          item.price <= this.state.maxPrice : true))
          .map((item,index)=> {
            return <Card key={index} category={item.category} title={item.title} price = {item.price} image = {item.image} />;
          }) :
          this.state.data.filter((item => this.state.selectedCategories.length ?
          item.price >= this.state.minPrice && 
          item.price <= this.state.maxPrice && 
          this.state.selectedCategories.includes(item.category) : true))
          .map((item,index)=> {
            return <Card key={index} category={item.category} title={item.title} price = {item.price} image = {item.image} />;
          }) 
          }

        </div>
      </div>
    );
  }
}

export default App;