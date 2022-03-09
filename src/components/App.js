import React, { Component } from "react";
import Header from "./Header";
import Layout from "./Layout";

export default class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header />
        </Layout>
      </div>
    );
  }
}
