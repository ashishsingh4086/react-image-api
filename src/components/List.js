import React, { Component } from "react";

export default class List extends Component {
  render() {
    console.log(this.props);
    console.log("hi");
    return (
      <div>
        <figure>
          <img className="images" src={this.props.value.previewURL} />
        </figure>
        <div className="container views">
          <p style={{ textAlign: "center" }}>
            <span>Views: </span>
            {this.props.value.views}
          </p>
        </div>
      </div>
    );
  }
}
