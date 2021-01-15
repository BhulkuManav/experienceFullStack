import React, {Component} from "react";
import {Link} from "react-router-dom";

class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You are logged Out.</h1>
                <div className="container">
                    Thank you for using our application.
                    <Link to="/login"> Click for Login Here </Link>
                </div>
            </div>
        )
    }
}

export default LogoutComponent;