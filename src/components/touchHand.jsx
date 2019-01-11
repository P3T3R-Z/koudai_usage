import React, { Component } from "react";
import touchHand from "../assets/images/touch.png";
/*
$parmas
 timeOut 弹出时间
 handStyle 样式
 */
var timer
class Touchhand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handShow: false,
      maxWidth:'750px'
    };
  }
  render() {
    //组件插槽节点
    let children = this.props.children;

    return this.state.handShow ? (
        <div className="max_touch_area" style={{maxWidth: this.state.maxWidth, top:this.props.styles.top, bottom:this.props.styles.bottom}}>
        <div
          className="touchArea"
          style={this.props.styles}
          onClick={this.props.event}
        >
          {React.Children.map(children, (child, i) => {
            return child;
          })}

          <div className="circle">
            <span />
          </div>
          <img src={touchHand} alt="" className="touchhand change" />
        </div>
        </div>
    ) : (
      ""
    );
  }
  componentDidMount() {
    let maxWidth = sessionStorage.getItem('maxWidth')+'px'
    this.setState({
        maxWidth
    })
    timer= setTimeout(() => {
      this.setState({
        handShow: true
      });
    }, this.props.timeOut);
  }
  componentWillUnMount = () => {
    clearTimeout(timer)
  }
}
export default Touchhand;
