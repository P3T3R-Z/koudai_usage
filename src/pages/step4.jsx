import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Touchhand from "../components/touchHand";
import step4img from "../assets/images/4.1.jpg";
import { docHeight } from "../assets/js/base";
import step4_text from "../assets/images/step4_text1.png"

class Step4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fade: true,
      redirect: false,
      touch: false,
      styles: {
        bottom: "-5%",
        left: "50%"
      }
    };
  }
  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/step5",
          }}
          push
          from="/step4"
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
            <img src="https://img.tuokgx.net/Public/spa/usage/static/media/step4_text1.f79d2db1.png" alt="" className="step4_text" />
            <img src="https://img.tuokgx.net/Public/spa/usage/static/media/4.1.c6247a8d.jpg" alt="" className="stepimg" />
          </div>
        </CSSTransition>

        <Touchhand timeOut="1000" styles={this.state.styles} event={this.next}>
          {
            <div
              style={{
                position: "fixed",
                width: "100%",
                height: "5rem",
                left: "0"
              }}
            />
          }
        </Touchhand>
      </div>
    );
  }
  componentDidMount() {
    console.log(docHeight());
    if (docHeight() >= 812) {
      this.setState({
        styles: {
          bottom: "-3%",
          left: "50%"
        }
      });
    }
  }
  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }
  next = () => {
    this.setState({
      redirect: true
    });
  };
}

export default Step4;
