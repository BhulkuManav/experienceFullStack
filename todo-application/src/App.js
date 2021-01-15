import React, { Component } from 'react';

/*import FirstComponent from './Component/learning-examples/FirstComponent'
import SecondComponent from './Component/learning-examples/SecondComponent'
import ThirdComponent from './Component/learning-examples/ThirdComponent'*/
import './App.css';
import TodoApp from "./Component/todo/TodoApp";
 
class App extends Component {
  render() {
    return (
        <div className="App">
          {/*<Counter></Counter>*/}
          <TodoApp></TodoApp>
        </div>
      )
  }
}

/*class LearningComponents extends Component {
  render() {
    return (
      <div className="ApLearningComponentsp">
      My ToDo Application
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent/>
      </div>
    )
  }
}*/

export default App
