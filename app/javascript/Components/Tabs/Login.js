/**
 * Created on 07/08/17.
 */

import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import DatabaseConnector from '../../Services/DatabaseConnector';

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
     * Handles submitting the form.
     * If login is successful, sets a cookie with the auth_token, and also the correct
     * userMode.
     * @param event
     */
    handleSubmit(event) {
        event.preventDefault();
        DatabaseConnector.sendUserCredentials(this.state.usernameI, this.state.passwordI)
            .then(response => {
                if (response.auth_token !== undefined) {
                    //cookie.save('auth_token', response.auth_token);
                    this.setState({errorMessage: ''});
                    this.props.setUserMode(response.user.role);
                } else {
                    console.log(response.error.user_authentication);
                    this.setState({usernameI: ''});
                    this.setState({passwordI: ''});
                    this.setState({errorMessage: "Wrong username/password or GitHub account"});
                }
            });
    }

    /**
     * Lifecycle render method
     * @returns {XML} The view as jsx
     */
    render(){
        return (
            <div>
                <span><h4 className={"loginError"}>{this.state.errorMessage}</h4><br /></span>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup className={"loginForm"}>
                        <Label for="username">Username</Label>
                        <Input className={"modeButtons"} type="username" name="name" id="username" placeholder="" onChange = {this.updateUsername} value={this.state.usernameI}/>
                    </FormGroup>
                    <FormGroup className={"loginForm"}>
                        <Label for="password">Password</Label>
                        <Input className={"modeButtons"} type="password" name="password" id="password" placeholder="" onChange = {this.updatePassword} value={this.state.passwordI}/>
                    </FormGroup>
                    <Button type="submit" className="modeButtons">Submit</Button>
                </Form>
                <a className="btn modeButtons" href={"auth/github"}>github</a>
                <p> </p>

            </div>
        );
    }
}

Login.propTypes = {

};

export default Login;




