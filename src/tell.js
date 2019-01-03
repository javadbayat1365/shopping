import React, { Component } from 'react';
import { Form, Input, Row, Col, Button } from 'antd';
import Header from './Header';
import ReactMixin from 'react-mixin';
import Mixins from './Mixins';

const FormItem = Form.Item;

 class AboutUs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formBody: {
                name: 'javad',
                email: '',
                message: ''
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlechange = this.handlechange.bind(this);

        this.success("hello Mixins");
        this.error("I'm ready for using Mixins");
    }
    
    handlechange(event){
      const target = event.target;
      const name = target.name;
      const value = target.value;

    this.state.formBody[name] = value;
    
    this.setState({
      formBody : this.state.formBody
    })
    }
   
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.formBody);

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
                            <Form onSubmit={this.handleSubmit}>
                                <FormItem label="name">
                                    <Input type="text" name="name" value={this.state.formBody.name} onChange={this.handlechange}  placeholder="please Enter Your Name" />
                                </FormItem>
                                <FormItem label="e-mail">
                                    <Input type="text" value={this.state.formBody.email} onChange={this.handlechange} name="email" placeholder="please Enter Your e-mail" />
                                </FormItem>
                                <FormItem label="message">
                                    <Input type="text" value={this.state.formBody.message} onChange={this.handlechange} name="message" placeholder="please Enter Your message" />
                                </FormItem>
                                <FormItem >
                                    <Button htmlType="submit" type="primary" >Click ME!</Button>
                                </FormItem>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>

        );
    }
}


ReactMixin.onClass(AboutUs,Mixins.log);
export default AboutUs;