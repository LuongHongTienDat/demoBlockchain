import React, { Component } from "react";
import Modal from "./modal";

class AddProductInfo extends Component {
  state = {
    name: "",
    location: "",
    distributor: "",
    entryDate: "",
    expiredDate: "",
    displayedAt: "",
    show: false,
  };

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    const info = Object.keys(this.state)
    
    this.props.onSubmit(this.state)
    console.log(this)
    this.showModal();
  }

  handleChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  render() {
    return (
      <React.Fragment>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </Modal>
        <div className="container w-75 text-left mt-4">
          <h2>Add New Product Information</h2>
          <form className="mt-4" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputName1">Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                value={this.state.name}
                onChange={this.handleChange}                
                placeholder="Enter product name..."
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputLocation1">Location</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                value={this.state.location}
                onChange={this.handleChange}                
                placeholder="Enter location..."
                name="location"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Distributor</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                value={this.state.distributor}
                placeholder="Enter distributor...."
                onChange={this.handleChange}
                name="distributor"
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEntryDate1">Entry Date</label>
              <input
                type="date"
                className="form-control"
                id="exampleInputEntryDate" 
                value={this.state.entryDate}  
                onChange={this.handleChange}    
                name="entryDate"         
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputExpiredDate1">Expired Date</label>
              <input
                type="date"
                className="form-control"
                id="exampleInputExpiredDate"   
                value={this.state.expiredDate}
                onChange={this.handleChange} 
                name="expiredDate"            
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputDisplayedAt1">Displayed At</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputDisplay"
                placeholder="Enter Display at..."
                value={this.state.displayedAt}
                onChange={this.handleChange}
                name="displayedAt"
              />
            </div>
            
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <hr />

        <div id="content" className="mt-4">
          <form onSubmit={this.props.handleSubmit} className="">
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
      </React.Fragment>
    );
  }
}

export default AddProductInfo;
// style="display: none"
