import React, {Component} from 'react';
import {Row, Col} from 'antd';
import helper from './helper';
import Product from './Product';
import propTypes from 'prop-types';


 class Products extends Component
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

        <Col className="ColProduct" key={key} span={8}>
        <Product index={key} details={this.props.products[key]}  AddToCard = {this.props.AddToCard} orders = {this.props.orders}/>
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

Products.PropTypes =
{
    AddToCard : propTypes.func.required,
    orders : propTypes.array.required,
    products : propTypes.Object,
}

export default Products;