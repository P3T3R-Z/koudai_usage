import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Touchhand from "../components/touchHand";
import step2img from "../assets/images/2.1.jpg";
import step2_2img from "../assets/images/2.2.jpg";
import sharebox from "../assets/images/sharebox.png";
import shareTip from "../assets/images/shareTip.png";
import { docHeight } from "../assets/js/base";
import step2_text1 from "../assets/images/step2_text1.png";


class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fade: true,
      redirect: false,
      fade2: false,
      touch: false,
      shareStyle: {},
      styles: {
        top: "8%",
        right: "5%",
        transform: "rotateY(180deg)"
      },
      styles2: {
        top: "60%",
        left: "30%"
      },
      open: false,
      otherdom: ""
    };
  }
  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/step3"
          }}
          push
          from="/step2"
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
          <img src="https://img.tuokgx.net/Public/spa/usage/static/media/2.1.5f1d8950.jpg" alt="" className="stepimg" />
        </CSSTransition>

        <CSSTransition
          in={this.state.fade2}
          timeout={300}
          classNames="fadein"
          unmountOnExit
        >
          {this.state.open === false ? (
            <div>
              <img src={step2_text1} alt="" className="step2_text1" />
              <img src="https://img.tuokgx.net/Public/spa/usage/static/media/2.2.e24803c2.jpg" alt="" className="stepimg" />
            </div>
          ) : (
            <div />
          )}
        </CSSTransition>

        {this.state.open === false ? (
          <Touchhand
            timeOut="1500"
            styles={this.state.styles}
            event={this.showshare}
          >
            {
              <div
                style={{
                  position: "fixed",
                  top: "-1.5rem",
                  height: "3rem",
                  width: "3rem",
                  right: "1.5rem"
                }}
              />
            }
          </Touchhand>
        ) : (
          <div className="blackbg" />
        )}

        <img
          src={sharebox}
          alt=""
          className="sharebox"
          style={this.state.shareStyle}
        />
        {this.state.otherdom}
      </div>
    );
  }
  componentDidMount() {
    console.log(docHeight());
    if (docHeight() >= 812) {
      this.setState({
        styles2: {
          top: "70%",
          left: "30%"
        }
      });
    }
    setTimeout(() => {
      this.setState({
        fade2: true
      });
    }, 1000);
  }
  componentWillUnmount = () => {
    this.setState = (state,callbak)=>{
      return
    }
  };
  showshare = () => {
    this.setState({
      open: true,
      shareStyle: {
        transform: "translateY(0%)"
      }
    });
    this.othertip();
  };

  othertip = () => {
    setTimeout(() => {
      if (this.state.open === true) {
        this.setState({
          otherdom: (
            <div>
              <img src={shareTip} alt="" className="shareTip" />
              <Touchhand
                timeOut="500"
                styles={this.state.styles2}
                event={() => {
                  this.setState({ redirect: true });
                }}
              />
            </div>
          )
        });
      }
    }, 500);
  };
}

export default Step2;
