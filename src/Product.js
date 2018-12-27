import React, {Component} from 'react';
import {Card} from 'antd';


 export  default class Product extends Component
{
    constructor(props)
    {
        super(props);
    }

    render(){
        let details = this.props.details;
        return(
            <Card  style={{ width: 240 }}>
            <div>
                <img src={details.image} width="100%" />
            </div>
            <div className="Row-card">
              title={details.title}
              description={details.description}
              </div>
          </Card>
        );
    }
}