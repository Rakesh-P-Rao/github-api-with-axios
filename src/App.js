import React, { Component, Fragment } from "react";
import axios from "axios";
import Spinner from "./Component/Spinner";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
    };
  }
  async componentDidMount() {
    //console.log("componentdidmont exsist here");
    // "window.fetch" is only for frontend whereas "axios" is working with both frontend and backend including nodejs, both are promise based
    // let response = await window.fetch("https://api.github.com/users");
    // console.log(response);
    // let json = await response.json();
    // console.log(json);

    let response = await axios.get("https://api.github.com/users");
    this.setState({ users: response.data, loading: true });
    console.log(response.data);
  }

  render() {
    let { loading, users } = this.state;
    //loop
    let GitUsers = users.map((user) => {
      return (
        <Fragment key={user.id}>
          <div className="card">
            <img
              className="card-img-top"
              src={user.avatar_url}
              alt={user.name}
            ></img>
            <div className="card-body">
              <h4 className="display-5 font-weight-bold">{user.login}</h4>
            </div>
          </div>
        </Fragment>
      );
    });
    return (
      <Fragment>
        {loading ? (
          <section className="container my-4 d-flex flex-wrap justify-content-between ">
            {GitUsers}
          </section>
        ) : (
          <Spinner />
        )}
      </Fragment>
    );
  }
}

export default App;
