import React, { Component } from 'react';
import {Row, Col} from 'antd';
import './App.css';
import Header from "./Header";
import Data from './data';
import Products from './Products';


class App extends Component {
 
  constructor(props)
  {
    super(props);
    this.state = {
      products : Data
    }
  }



  render() {
    return (
      <div>
        <Row className="RowHeader" justify="center" type="flex">
          <Col span={12} >
          <Header selectedMenu='home' />
          <div>Welcome To My Shop</div>
          <Products products={this.state.products} />
          </Col>

        </Row>
        
        {/* <Welcome />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
