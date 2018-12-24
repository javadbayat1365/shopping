import React, { Component } from 'react';
import {Row, Col} from 'antd';
import './App.css';
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={8}></Col>
          <Col span={8}><Header selectedMenu='home' /></Col>
          <Col span={8}></Col>
        </Row>
        
        {/* <Welcome />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
