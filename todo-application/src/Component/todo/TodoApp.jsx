import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import "./TodoApp.css"
import "../../bootstrap.css"
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent"
import ListTodosComponent from "./ListTodosComponent"
import LoginComponent from "./LoginComponent"
import LogoutComponent from "./LogoutComponent"
import WelcomeComponent from "./WelcomeComponent"
import AuthenticatedRoute from "./AuthenticatedRoute.jsx"
import TodoComponent from "./TodoComponent.jsx"

class TodoApp extends Component {
    render() {
        return (
            <div>
                {/*My Todo Application*/}
                <div className="TodoApp">

                    <Router>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>

                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </Router>
                    <br/>
                </div>
            </div>
        )
    }
}

function ErrorComponent() {
    return <div>Error happened, please contact abcd-xyz</div>
}

export default TodoApp;
