import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Touchhand from "../components/touchHand";
import step1img from "../assets/images/1.1.jpg";
import step1_2img from "../assets/images/1.2.jpg";
import step1_2_text from "../assets/images/text.png";

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fade: true,
      redirect: false,
      fade2: false,
      touch: false,
      styles: {
        top: "45%",
        right: "3%"
      }
    };
  }
  saveRef = ref => {
    this.setState({
      refDom: ref
    });
  };
  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/step2"
          }}
          push
          from="/"
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
          <img
            src="https://img.tuokgx.net/Public/spa/usage/static/media/1.1.6e7bc70b.jpg"
            alt=""
            className="stepimg"
            ref={this.saveRef}
            onLoad={() => {
              window.dispatchEvent(new Event("resize"));
              const { clientWidth } = this.state.refDom;

              sessionStorage.setItem("maxWidth", clientWidth);
            }}
          />
        </CSSTransition>
        <CSSTransition
          in={this.state.fade2}
          timeout={300}
          classNames="fadein"
          unmountOnExit
        >
          <div>
            <img src="https://img.tuokgx.net/Public/spa/usage/static/media/1.2.e76a4269.jpg" alt="" className="stepimg" />
            <img src={step1_2_text} alt="" className="step1_2_text" />
          </div>
        </CSSTransition>

        <Touchhand timeOut="1500" styles={this.state.styles} event={this.next}>
          {
            <div
              style={{
                position: "fixed",
                width: "100%",
                height: "5rem",
                left: "0",
                marginTop: "-2.5rem"
              }}
            />
          }
        </Touchhand>
      </div>
    );
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        fade2: true
      });
    }, 1000);
  }
  componentWillUnmount = () => {
    this.setState = (state,callback)=>{
      return;
    };
  };
  next = () => {
    this.setState({
      redirect: true
    });
  };
}

export default Step1;
