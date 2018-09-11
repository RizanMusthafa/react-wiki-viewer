import React, { Component } from "react";
import SearchForm from "./components/search-form";
import Wikies from "./components/wikies";
import WikiView from "./components/wiki-view";
import Data from "./data";

class App extends Component {
  state = {
    wikies: [],
    currentWiki: null,
    currentWikiDetails: {},
    errorAlert: ""
  };

  data = new Data();

  componentWillMount() {
    this.getSearchResults();
  }

  showError(er) {
    console.log(er);
    const errBox = (
      <div className="alert alert-danger">
        <h5>Somthing went wrong !</h5>
      </div>
    );
    return this.setState({ errorAlert: errBox });
  }

  async getSearchResults(val = "home") {
    try {
      const res = await this.data.fetchAll(val);
      this.setState({ wikies: res.data.query.search });
      this.setState({ errorAlert: null });
    } catch (e) {
      this.showError(e);
    }
  }

  async getWiki(id) {
    const res = await this.data.fetchOne(id);
    this.setState({ currentWikiDetails: res.data.query.pages[0] });
    return res.data.query.pages[0];
  }

  changeWikiView(clickedWiki = null) {
    this.setState({ currentWiki: clickedWiki });
    if (clickedWiki === null) return;
    this.getWiki(clickedWiki.pageid);
  }

  render() {
    const wikiveiw =
      this.state.currentWiki !== null ? (
        <div className="col-md-7">
          <WikiView
            wikiDeatail={this.state.currentWikiDetails}
            closeWiki={() => this.changeWikiView()}
          />
        </div>
      ) : (
        ""
      );
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-info navbar-expand-md fixed-top">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">
              Wiki Viewer
            </a>
            <SearchForm setSearchWord={val => this.getSearchResults(val)} />
          </div>
        </nav>
        <div className="container-fluid pt-5 mt-5">
          {this.state.errorAlert}
          <div className="row">
            {wikiveiw}
            <div className="col">
              <Wikies
                chooseWiki={x => this.changeWikiView(x)}
                wikies={this.state.wikies}
                currentWiki={this.state.currentWiki}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
