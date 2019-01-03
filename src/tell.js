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
            },
            counter: 0



        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlechange = this.handlechange.bind(this);

        this.success("hello Mixins");
        this.error("I'm ready for using Mixins");
    }

    handlechange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.state.formBody[name] = value;

        this.setState({
            formBody: this.state.formBody
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.formBody);


        this.setState({
            counter: this.state.counter + 1
        })
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
                                    <Input type="text" name="name" value={this.state.formBody.name} onChange={this.handlechange} placeholder="please Enter Your Name" />
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
                                <Content mynumber={this.state.counter} />
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>

        );
    }
}

class Content extends React.Component {
    componentWillMount() {
        this.success("Component Will Mount");
    }
    componentDidMount() {
        this.error("Component Did Mount");
    }
     
    componentWillUpdate(){
        this.success("Component WIll Update");
    }

    componentDidUpdate(){
        this.error("Component DId Update");
    }


    componentWillReceiveProps(){
        if(this.shouldComponentUpdate() === true)
     this.success("Component WIll Receive Props");
     else
     this.error("Component WIll not Receive Props");
    }

    componentWillUnmount()
    {
        this.error("Component WIll Unmount");
    }

    shouldComponentUpdate()
    {
        return true;
    }


    constructor(props) {
        super(props);
    }
    render() {
        return (
            <FormItem label="Counter Click">
                <label type="lable">{this.props.mynumber}</label>
            </FormItem>
        )
    }
}


ReactMixin.onClass(Content,Mixins.log);
ReactMixin.onClass(AboutUs, Mixins.log);
export default AboutUs;