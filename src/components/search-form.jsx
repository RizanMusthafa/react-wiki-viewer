import React from 'react';

class SearchForm extends React.Component {

  state = {
    searchInp: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setSearchWord(this.state.searchInp)
    this.setState({ searchInp: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ml-auto form-inline">
        <div className="input-group">
          <input placeholder="search in wikipedia..." className="form-control" size="35" value={this.state.searchInp} onChange={(e) => this.setState({ searchInp: e.target.value })} />
          <div className="input-group-append">
            <button className="btn btn-light">Search</button>
          </div>
        </div>
      </form>
    );
  }
}
export default SearchForm;
