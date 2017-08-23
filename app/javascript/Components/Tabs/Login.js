/**
 * Created on 07/08/17.
 */

import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import cookie from 'react-cookies';

/**
 * Login component
 * @extends Component
 */

class Login extends Component{

    /**
     * Component constructor
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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Lifecycle method
     */

    componentDidMount() {
    }

    /**
     * Function that updates visible username
     */

    updateUsername(e) {
        this.setState({usernameI: e.target.value});
    }

    /**
     * Function that updates password
     */

    updatePassword(e) {
        this.setState({passwordI: e.target.value});
    }

    /**
     * Login handler
     */

    submitLogin() {
        //console.log("aaa");
        this.setState({errorMessage: ""});
        if (this.state.usernameI === 'guest'){
            this.props.setUserMode(this.state.usernameI);
        } else if (this.state.usernameI === 'user'){
            this.props.setUserMode(this.state.usernameI);
            this.doFetch().then(response => {
                return response.json()}).then(resp => {
                    console.log(resp.auth_token);
                    if(resp.auth_token !== undefined) {
                        localStorage.setItem('token', resp.auth_token);
                    }
            })
        } else if (this.state.usernameI === 'admin'){
            this.props.setUserMode(this.state.usernameI);
        } else {
            this.setState({errorMessage: "login failed"});
            //this.setState({usernameI: ""});cant overwrite input field from here?
            //this.setState({passwordI: ""});
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.usernameI + ' : ' + this.state.passwordI)
        return fetch('/authenticate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            },
            credentials: 'same-origin',
            body: JSON.stringify({
                name: this.state.usernameI,
                password: this.state.passwordI
            })})
                .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    } else {
                        return null;
                    }
                })
                .then(resp => {
                    console.log(resp.auth_token);
                    if(resp.auth_token !== undefined) {
                        cookie.save('auth_token', resp.auth_token);
                        this.props.setUserMode(resp.user.role);
                    }
        });
    }

    /**
     * Lifecycle render method
     * @returns {XML} The view as jsx
     */

    render(){
        let mix = (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup className={"loginForm"}>
                        <Label for="username">UserName</Label>
                        <Input className={"modeButtons"} type="username" name="email" id="username" placeholder="" onChange = {this.updateUsername}/>
                    </FormGroup>
                    <FormGroup className={"loginForm"}>
                        <Label for="password">Password</Label>
                        <Input className={"modeButtons"} type="password" name="password" id="password" placeholder="" onChange = {this.updatePassword}/>
                    </FormGroup>
                    <Button type="submit" className="modeButtons">Submit</Button>
                </Form>
                <Button className={"modeButtons"} onClick = {this.submitLogin}>Submit</Button>
                <a className="btn modeButtons" href="auth/github">github</a>
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




