import React from "react";

class RequestDocument extends React.Component {
  state = {
    typeOfDocument: "",
    department: "",
    reason: ""
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSend = () => {
    this.setState({
      typeOfDocument: "",
      department: "",
      reason: ""
    });
    alert("Your request has been sent.");
  };

  render() {
    const { typeOfDocument, department, reason } = this.state;

    return (
      <div className="o-container feed-container request-form-container">
        <div className="request-form">
          <label htmlFor="typeOfDocument" className="text-label">
            Type of document
          </label>
          <input
            type="text"
            className="text-input"
            id="typeOfDocument"
            onChange={this.handleChange("typeOfDocument")}
            value={typeOfDocument}
          />

          <label htmlFor="department" className="text-label">
            Department
          </label>
          <input
            type="text"
            className="text-input"
            id="department"
            onChange={this.handleChange("department")}
            value={department}
          />

          <label htmlFor="reason" className="text-label">
            Reason of request
          </label>
          <textarea
            className="text-input"
            id="reason"
            rows="2"
            onChange={this.handleChange("reason")}
            value={reason}
          />

          <button className="btn btn-primary" onClick={this.handleSend}>
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default RequestDocument;
