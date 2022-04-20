import React, { Component } from "react";

class AddProductInfo extends Component {
  state = {};

  handleSubmit() {}

  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div id="content" className="text-center">
          <form onSubmit={this.handleSubmit} className="">
            <input
              id="newDatum"
              type="text"
              className="form-control mb-3"
              placeholder="Add data..."
              required
            />
            <input type="submit" className="btn btn-primary" hidden="" />
          </form>
          <ul id="dataList" className="list-unstyled">
            <div className="datumTemplate checkbox">
              <label>
                <span className="content">Data goes here...</span>
              </label>
            </div>
            <div>{}</div>
          </ul>
        </div>
      </div>
    );
  }
}

export default AddProductInfo;
// style="display: none"
