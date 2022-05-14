import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
export default class Modal extends Component {
  static propTypes = {
    zIndex: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string,
    padding: PropTypes.string,
    background: PropTypes.string,
    borderRadius: PropTypes.string,
    opacity: PropTypes.number,
    color: PropTypes.string,
    render: PropTypes.func,
    closeCallback: PropTypes.func
  };
  static defaultProps = {
    isShow: false,
    zIndex: 999,
    width: "80px",
    height: "40px",
    background: "#fff",
    borderRadius: "5px",
    opacity: 1,
    color: "#000",
    padding: "6px 20px"
  };
  constructor() {
    super();
    this.timer = null;
  }
  componentWillReceiveProps(nextProps) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.props.closeCallback();
    }, 2000);
    console.log(nextProps);
  }
  render() {
    const {
      zIndex,
      padding,
      background,
      borderRadius,
      opacity,
      color,
      render
    } = this.props;
    const { isShow } = this.props;
    console.log(this.state);
    return (
      <div
        className="custome_modal_box"
        style={{
          display: isShow ? "flex" : "none",
          zIndex,
          padding,
          background,
          borderRadius,
          opacity,
          color
        }}
      >
        {render ? render() : <div>弹窗文案</div>}
      </div>
    );
  }
}
