import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { Redirect } from "react-router-dom";
import Touchhand from "../components/touchHand";
import step5img from "../assets/images/5.1.jpg";
import step5_2img from "../assets/images/5.2.png";
import step5_3img from "../assets/images/5.3.png";
import step5_text1 from "../assets/images/step5_text1.png"
import {docHeight} from "../assets/js/base"
import jscookie from "jscookie"
class Step5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fade: true,
      fade2:false,
      redirect: false,
      styles: {
        bottom: "-5%",
        left: "50%"
      },
      token:''
    };
  }
  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to="/"
          push
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
          <img src="https://img.tuokgx.net/Public/spa/usage/static/media/5.1.963d0c62.jpg" alt="" className="stepimg" />
        </CSSTransition>

        <CSSTransition
          in={this.state.fade2}
          timeout={300}
          classNames="fade"
          unmountOnExit
          appear={true}
        >
          <img src={step5_2img} alt="" className="step5_2" />
        </CSSTransition>

        <CSSTransition
          in={this.state.fade3}
          timeout={100}
          classNames="fade"
          unmountOnExit
          appear={true}
        >
        <div>
          <img src="https://img.tuokgx.net/Public/spa/usage/static/media/step5_text1.b7eb19ee.png" alt="" className="step5_text1"/>
          <img src="https://img.tuokgx.net/Public/spa/usage/static/media/5.3.53a40dd8.png" alt="" className="stepimg" />
          </div>
        </CSSTransition>

        <Touchhand timeOut="2400" styles={this.state.styles} event={this.next}>
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
  componentWillMount(){
    
    if(this.props.location.hasOwnProperty("state")){
      this.setState({
        redirect:true
      })
    }
  }
  componentDidMount() {
    
    if(docHeight()>= 812){
      this.setState({
        styles: {
          bottom: "-3%",
          left: "50%"
        }
      })
    }
    setTimeout(() => {
      this.setState({
        fade2: true
      });
    }, 800);
    setTimeout(() => {
      this.setState({
        fade3: true
      });
    }, 1600);

    this.setState({
      token: jscookie.get('microchatCode')
    })
    console.log(this.state.token)
  }
  componentWillUnmount(){
    this.setState = (state,callback)=>{
      return;
    };
  }
  next = () => {
    window.location.href = `https://m.tuokgx.net/?token=${this.state.token}&isGuide=1`
    
  };
}

export default Step5;
