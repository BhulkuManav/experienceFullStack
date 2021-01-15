import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService.js"

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            showSuccessMessage: false,
            hasLoginFailed: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        console.log(this.state)
        this.setState({[event.target.name]: event.target.value})
    }

    loginClicked() {
        /*
        if (this.state.username === "in28minutes" && this.state.password === "dummy") {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/Welcome/${this.state.username}`)
            console.log("Successful")
        } else {
            console.log("Failed")
            this.setState({showSuccessMessage: false, hasLoginFailed: true})
        }
         AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(() => {
                    AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
                    this.props.history.push(`/Welcome/${this.state.username}`) } )
            .catch(() => {
                    console.log("Failed")
                    this.setState({showSuccessMessage: false, hasLoginFailed: true})}
            )
*/
        AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                this.props.history.push(`/Welcome/${this.state.username}`) } )
            .catch(() => {
                console.log("Failed")
                this.setState({showSuccessMessage: false, hasLoginFailed: true})}
            )

    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning"> invalid Credentials </div>}
                    {this.state.showSuccessMessage && <div> Successful Login </div>}
                    <br/>
                    User Name: <input type="text" name="username" value={this.state.username}
                                      onChange={this.handleChange}/>
                    Password: <input type="text" name="password" value={this.state.password}
                                     onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent