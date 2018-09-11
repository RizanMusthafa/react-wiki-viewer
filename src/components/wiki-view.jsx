import React from "react";

class WikiView extends React.Component {
  render() {
    const { pageid, title, revisions } = this.props.wikiDeatail;
    const content = revisions ? revisions[0].content : null;
    return (
      <div className="card mb-4">
        <div className="card-header">
          {title}
          <span
            className="close text-danger"
            onClick={() => this.props.closeWiki()}
          >
            &times;
          </span>
        </div>
        <div className="card-body">
          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <div className="card-footer text-right">
          <a
            href={`https://en.wikipedia.org/?curid=${pageid}`}
            target="_blank"
            className="btn"
          >
            View in Wikipedia
          </a>
        </div>
      </div>
    );
  }
}

export default WikiView;
