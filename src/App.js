import React, { Component } from 'react';
import {Row, Col} from 'antd';
import './App.css';
import Header from "./Header";
import Data from './data';
import Products from './Products';
import  Cookie from 'universal-cookie';
import ButtonCart from './ButtonCart';



class App extends Component {
  cookies = new Cookie();
  constructor(props)
  {
    super(props);
    this.state = {
      products : Data,
      orders :[]//typeof(this.cookies.get('orders') == "undefined" ? [] : this.cookies.load("orders"))
    }
    this.AddToCard = this.AddToCard.bind(this);
    
  }
  
  AddToCard(key){
    if(this.state.products[key].available && this.state.orders.indexOf(key) === -1 )
    {
        this.state.orders.push(key);
        
        this.cookies.set('orders',this.state.orders,{path:'/'});
        this.setState((prevState) => {
        this.state.orders = prevState.orders
        }); 
    }
  }

  render() {
    return (
      <div>
        <Row className="RowHeader" justify="center" type="flex">
          <Col span={18} >
          <Header selectedMenu='home' />
          <div>Welcome To My Shop</div>
          <Products products={this.state.products} AddToCard = {this.AddToCard} orders = {this.state.orders} />
          </Col>
          <ButtonCart orders = {this.state.orders} products={this.state.products}/>
        </Row>
      </div>
    );
  }
}

export default App;
