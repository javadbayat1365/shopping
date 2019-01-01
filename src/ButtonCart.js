import React, { Component } from 'react';
import { Button, Menu, Dropdown, Icon } from 'antd';


export default class ButtonCart extends Component {
    constructor(props) { super(props) }
    handleMenuClick(e) {
        console.log('click', e);
    }

    renderMenu(key) {
        return <Menu.Item key={key}>{this.props.products[this.props.orders[key]].title} <Icon type="close" style={{ margin: 5 }} /></Menu.Item>
    }


    render() {
        let menu = (
            <Menu onClick={this.handleMenuClick}>
                {Object.keys(this.props.orders).map(this.renderMenu)}
            </Menu>
        );
        return (
            <div>
                <Dropdown overlay={menu}>
                    <Button type="primary" style={{ margin: 0 }}>
                        Actions <Icon type="shopping-cart" />
                    </Button>
                </Dropdown>
            </div>
        );
    }
}