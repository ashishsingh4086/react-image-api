import React, { Component } from "react";
import keys from "../keys/keys";
import List from "./List";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gallery: []
    };
  }

  getGallery = async e => {
    e.preventDefault();
    const fetchGallery = await fetch(
      `${keys.API_URL}${keys.API_KEY}&q=${this.refs.input.value}`
    );
    const result = await fetchGallery.json();
    await this.setState({
      gallery: result.hits
    });
    console.log(this.state.gallery);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.getGallery}>
          <div className="center-search">
            <input type="text" ref="input" placeholder="Search Images" />
          </div>
          <div className="container">
            {this.state.gallery.map(item => {
              return <List key={item.id} value={item} />;
            })}
          </div>
        </form>
      </div>
    );
  }
}
