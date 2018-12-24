import React, { Component } from 'react';
import { Menu, Icon } from 'antd';



const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: this.props.selectedMenu
        }
        this.handleclick = this.handleclick.bind(this);
    }

    handleclick(e) {
        e.preventDefault();
        this.setState({
            current: e.key
        })
    }



    render() {
        return (
            <div>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="home">
                        <Icon type="Home" />Home
                    </Menu.Item>
                    <Menu.Item key="app">
                        <Icon type="appstore" />AboutUs
                    </Menu.Item>
                    <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Sub Menu</span>}>
                        <MenuItemGroup >
                            <Menu.Item key="images">Images</Menu.Item>
                            <Menu.Item key="tell">Tell</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

