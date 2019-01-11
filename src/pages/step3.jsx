import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Touchhand from "../components/touchHand";
import step3img from "../assets/images/3.1.jpg";
import step3_text1 from "../assets/images/step3_text1.png";
import step3_text2 from "../assets/images/text.png";

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fade: true,
      redirect: false,
      touch: false,
      styles: {
        top: "66%",
        right: "3%"
      }
    };
  }
  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/step4"
          }}
          push
          from="/step3"
        />
      );
    }
    return (
      <div>
        <CSSTransition
          in={this.state.fade}
          timeout={300}
          classNames="fade"
          unmountOnExit
          appear={true}
        >
        <div>
          <img src={step3_text1} alt="" className="step3_text1"/>
          <img src={step3img} alt="" className="stepimg" />
          <img src={step3_text2} alt="" className="step3_text2"/>
        </div>
        </CSSTransition>

        <Touchhand timeOut="1000" styles={this.state.styles} event={this.next}>
          {<div
            style={{
              position: "fixed",
              width: "100%",
              height: "5rem",
              left: "0",
              marginTop:'-2.5rem'
            }}
            
          />}
        </Touchhand>
      </div>
    );
  }
  componentDidMount() {
    
  }
  next = () => {
    this.setState({
      redirect: true
    });
  };
}

export default Step3;
