import React, {Component} from 'react';
import {Card,Tag} from 'antd';


 export  default class Product extends Component
{
    constructor(props)
    {
        super(props);
    }

    render(){
        let details = this.props.details;
        let stylebuy = details.available && this.props.orders.indexOf(this.props.index) == -1 ? '' : {cursor : 'not-allowed',backgroundColor:'#999'}
        return(
            <Card  style={{ width: 240 }}>
            <div>
                <img src={details.image} width="100%" />
            </div>
            <div className="Row-card">
              title={details.title}
              description={details.description}
              </div>
              <div style={{ padding:"0px 10px 10px" }}>
                  <Tag color="#54d068">
                     { details.price }
                  </Tag>
                  <Tag color="#108ee9" style={stylebuy} onClick={() => this.props.AddToCard(this.props.index) }>Add To Card</Tag>
              </div>
          </Card>
        );
    }
}