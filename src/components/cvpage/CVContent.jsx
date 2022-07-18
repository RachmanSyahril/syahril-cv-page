import React from "react";
import './CVContent.css';

function CVContent({ period, periodDesc, title, subTitle, desc, children}) {
  return (
    <div className="cv__main-content">
      <div className="cv__main-content-side">
        <small>{ period }</small>
        <p>{ periodDesc }</p>
      </div>
      <div className="cv__main-content-title">
        <h3>{ title }</h3>
        <h4>{ subTitle }</h4>
        <h5>{ desc }</h5>
        { children }
      </div>
    </div>
  );
}

export default CVContent;
