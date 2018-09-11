import React from "react";

const Wikies = ({ wikies, chooseWiki, currentWiki }) => {
  return (
    <ul className="list-group">
      {wikies.map(wiki => {
        let activeClass = "";
        if (currentWiki !== null && currentWiki.pageid === wiki.pageid) {
          activeClass = " active";
        }
        const listClasses = "list-group-item mb-3" + activeClass;
        return (
          <li key={wiki.pageid} className={listClasses}>
            <h4>{wiki.title}</h4>
            <hr />
            <p
              className="text-muted"
              dangerouslySetInnerHTML={{ __html: wiki.snippet }}
            />
            <div className="text-right">
              <a
                href=""
                className="btn"
                onClick={e => {
                  e.preventDefault();
                  chooseWiki(wiki);
                }}
              >
                View
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Wikies;
