/**
 * Created on 07/08/17.
 */

import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Login extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render(){
        return (
            <div>
            <Form>
                <FormGroup className={"loginForm"}>
                    <Label for="username">UserName</Label>
                    <Input className={"modeButtons"} type="username" name="email" id="username" placeholder="" />
                </FormGroup>
                <FormGroup className={"loginForm"}>
                    <Label for="password">Password</Label>
                    <Input className={"modeButtons"} type="password" name="password" id="password" placeholder="" />
                </FormGroup>
                <Button className={"modeButtons"}>Submit</Button>
            </Form>
            </div>
        );
    }
}

Login.propTypes = {

};

export default Login;




