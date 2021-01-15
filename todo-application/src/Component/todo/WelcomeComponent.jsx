import React, {Component} from "react";
import {Link} from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService.js";

class WelcomeComponent extends Component {
    constructor(props) {
        super(props);
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
        this.handleError = this.handleError.bind(this);
        this.state = {welcomeMessage: '', errorMessage: ''}
    }

    render() {
        return (
            <>
                { this.state.errorMessage && <div className="alert alert-warning"> {this.state.errorMessage} </div>}
                <h1>Welcome !!!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}.
                    Please navigate here for Todos list <Link to="/todos"> Here </Link>
                </div>
                <div className="container">
                    click here to get the customized message.
                    <button onClick={this.retrieveWelcomeMessage}
                            className="btn-btn-success">Get Welcome Message</button>
                </div>
                <div className="container"> {this.state.welcomeMessage} </div>
            </>
        )
    }

    retrieveWelcomeMessage() {
        /**        HelloWorldService.executeHelloWorldService()
         .then(response => this.handleSuccessfulResponse((response)))

         HelloWorldService.executeHelloWorldBeanService()
         .then(response => this.handleSuccessfulResponse(response))
         */
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then(response => this.handleSuccessfulResponse((response)))
            .catch(error => this.handleError(error))
    }

    handleSuccessfulResponse(response) {
        console.log(response)
        this.setState({ welcomeMessage: response.data.message })
    }

    handleError(error) {
        let errorMessages = '';

        if (error.message) {
            errorMessages += error.message
        }
        if (error.response && error.response.data) {
            errorMessages += error.response.data.message
        }
        this.setState({errorMessage: errorMessages})
    }

}

export default WelcomeComponent