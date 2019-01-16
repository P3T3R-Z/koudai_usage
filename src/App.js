import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import routers from "./routers"
import './assets/css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Router>
        <div>
          {routers.map((item, index) => {
            if (item.exact) {
              return (
                <Route
                  exact
                  path={item.path}
                  key={index}
                  component={item.component}
                />
              );
            } else {
              return (
                <Route
                  path={item.path}
                  key={index}
                  component={item.component}
                />
              );
            }
          })}
        </div>
      </Router>
    );
  }
  componentWillUnmount(){
    this.setState = (state,callback)=>{
      return;
    };
  }
}

export default App;
