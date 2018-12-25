import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {Link } from 'react-router-dom';


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
                    <Link to="/" >Home</Link>
                    </Menu.Item>
                    <Menu.Item key="about">
                       <Link to="/about">AboutUs</Link>
                    </Menu.Item>
                    <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Sub Menu</span>}>
                        <MenuItemGroup >
                            <Menu.Item key="tell">
                            <Link to="/tell"  rel="noopener noreferrer">Tell</Link>
                            </Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <Menu.Item key="">
                        <Link to="/Nav/Four"  rel="noopener noreferrer">Navigation Four - Link</Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

