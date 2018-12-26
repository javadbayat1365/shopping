import React, {Component} from 'react';
import {Row, Col} from 'antd';
import helper from './helper';

export default class Products extends Component
{
constructor(props)
{
    super(props);
    this.chunkProducts =helper.array_chunck(Object.keys(this.props.products),3);
}

renderRow(key)
{
return(
    <Row>{key}</Row>
);
}
    render(){
        return(
            <div>
            <h1>this is Products </h1>
            <Row>
               <Col span={12}>
               {Object.keys(this.chunkProducts).map(this.renderRow)}
               </Col>
            </Row>
            </div>
            
        );
    }
}