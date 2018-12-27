import React, {Component} from 'react';
import {Row, Col} from 'antd';
import helper from './helper';
import Product from './Product';
export default class Products extends Component
{
constructor(props)
{
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.renderProduct = this.renderProduct.bind(this);
    this.chunkProducts =helper.array_chunk(Object.keys(this.props.products),3);
}

renderProduct(key)
{
    return(

        <Col key={key} span={8}>
        <Product details={this.props.products[key]} />
        </Col>
    );
 
}

renderRow(key)
{
return(
    <Row key={key}>
        {this.chunkProducts[key].map(this.renderProduct)}
    </Row>
);
}
    render(){
        return(
            <div>
            <Row className="row-products">
               <Col >
               {Object.keys(this.chunkProducts).map(this.renderRow)}
               </Col>
            </Row>
            </div>
            
        );
    }
}