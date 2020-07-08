import React, { Component } from "react";
import classes from "./Layout.css";
import { axiosCreate } from "../../Component/Axios/Axios";

class Layout extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      Data: [],
      searchname: "",
    };
  }

  componentDidMount() {
    console.log("Component Mounted");
    axiosCreate
      .get("/characters")
      .then((response) => this.setState({ Data: response.data }))
      .catch((error) => console.log(error));
  }

  handleChange = (evt) => {
    this.setState({ searchname: evt.target.value });
  };

  handleSubmit = (evt) => {
    console.log("search");
    evt.preventDefault();
    axiosCreate
      .get(`/characters?name=${this.state.searchname}`)
      .then((response) => this.setState({ Data: response.data }))
      .catch((error) => console.log(error));
  };

  render() {
    console.log("render");
    let imgData = null;
    imgData = this.state.Data.map((imgData, index) => (
      <div className={classes.spacing}>
        <img
          key={imgData.char_id}
          src={imgData.img}
          alt="image not Available"
        />
        <p key={index}>Name:{imgData.name}</p>
      </div>
    ));

    let specificimg = null;
    specificimg = this.state.Data.map((a) => (
      <div className={classes.arrange}>
        <p>Name: {a.name}</p>
        <p>Birthday:{a.birthday}</p>
        <p>Nickname:{a.nickname}</p>
        <p>Status:{a.status}</p>
        <p>Portrayed:{a.portrayed}</p>
      </div>
    ));

    return (
      <div>
        <form className={classes.text} onSubmit={this.handleSubmit}>
          <h1>Breaking Bad</h1>
          <input
            className={classes.textbreak}
            type="text"
            placeholder="Search here"
            name={this.state.searchname}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        <div className={classes.both}>
          <div className={classes.dfl}>{imgData}</div>
          {this.state.Data.length >= 2 ? null : specificimg}
        </div>
      </div>
    );
  }
}

export default Layout;
