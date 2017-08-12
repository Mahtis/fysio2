/**
 * Created on 07/08/17.
 */

import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Login extends Component{

    /*

    Component constructor

    */

    constructor(props) {
        super(props);

        this.state = {
            usernameI: "",
            passwordI: "",
            errorMessage: "",
        };
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    /*

    Lifecycle method

     */

    componentDidMount() {
    }

    /*

    Function that updates visible username

    */

    updateUsername(e) {
        this.setState({usernameI: e.target.value});
    }

    /*

    Function that updates password

    */

    updatePassword(e) {
        this.setState({passwordI: e.target.value});
    }

    /*

    Login handler

     */

    submitLogin() {
        console.log("aaa");
        this.setState({errorMessage: ""});
        if (this.state.usernameI === 'guest'){
            this.props.setUserMode(this.state.usernameI);
        } else if (this.state.usernameI === 'user'){
            this.props.setUserMode(this.state.usernameI);
        } else if (this.state.usernameI === 'admin'){
            this.props.setUserMode(this.state.usernameI);
        } else {
            this.setState({errorMessage: "login failed"});
            //this.setState({usernameI: ""});cant overwrite input field from here?
            //this.setState({passwordI: ""});
        }
    }

    /*

    Lifecycle render method

     */

    render(){
        let mix = (
            <div>
                <Form>
                    <FormGroup className={"loginForm"}>
                        <Label for="username">UserName</Label>
                        <Input className={"modeButtons"} type="username" name="email" id="username" placeholder="" onChange = {this.updateUsername}/>
                    </FormGroup>
                    <FormGroup className={"loginForm"}>
                        <Label for="password">Password</Label>
                        <Input className={"modeButtons"} type="password" name="password" id="password" placeholder="" onChange = {this.updatePassword}/>
                    </FormGroup>
                </Form>
                <Button className={"modeButtons"} onClick = {this.submitLogin}>Submit</Button>
                <p> </p>
                <h4>{this.state.errorMessage}</h4>
            </div>
        );

        let old = (
            <Form>
                <FormGroup className={"loginForm"}>
                    <Label for="username">UserName</Label>
                    <Input className={"modeButtons"} type="username" name="email" id="username" placeholder="" />
                </FormGroup>
                <FormGroup className={"loginForm"}>
                    <Label for="password">Password</Label>
                    <Input className={"modeButtons"} type="password" name="password" id="password" placeholder="" />
                </FormGroup>
            </Form>
        );

        let dynamic = (
            <div>
                <Label for="username" >UserName</Label>
                <br/>
                <input className={"modeButtons"} type = "text" value = {this.state.data} onChange = {this.updateUsername} />
                <br/>
                <Label for="password">Password</Label>
                <br/>
                <input className={"modeButtons"} type = "text" value = {this.state.data} onChange = {this.updatePassword} />
                <h4>{this.state.usernameI}</h4>
                <h4>{this.state.passwordI}</h4>
            </div>
        );

        return (
            <div>
                {mix}
            </div>
        );
    }
}

Login.propTypes = {

};

export default Login;




