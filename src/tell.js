import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import Header from './Header';

export default class AboutUs extends Component {

    constructor(props) {
        super(props);
    }


    handleSubmit(e) {
      e.preventDefault();
     let dataform = {
          name:this.refs.name.value,
          email: this.refs.mail.value,
          message:this.refs.message.value
      }
console.log(dataform);

    }


    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={12}>
                    <Header selectedMenu="morepage:tell" />
                    <h2>welcome to my shopping</h2>
                    <Row type="flex" justify="center">
                        <Col span={12}>
                            <h2>Contact US</h2>
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-lable">
                                        <label>
                                            Name
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="ant-form-item-control">
                                        <input type="text" ref="name" name="name" placeholder="please Enter Your Name" className="ant-input ant-input-lg" />
                                    </div>
                                </div>

                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-lable">
                                        <label>
                                            Email
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="ant-form-item-control">
                                        <input type="text" name="email" ref="mail" placeholder="please Enter Your Email" className="ant-input ant-input-lg" />
                                    </div>
                                </div>

                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-lable">
                                        <label>
                                            Message
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="ant-form-item-control">
                                        <textarea type="text" ref="message" name="message" placeholder="please Enter Your Message" className="ant-input ant-input-lg" />
                                    </div>
                                </div>

                                <div>
                                    <div className="ant-form-item-control">
                                      <Button  htmlType="submit" text value="click me!"  />
                                    </div>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Col>
            </Row>

        );
    }
}