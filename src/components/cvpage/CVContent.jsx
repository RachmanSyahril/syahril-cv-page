import React from "react";
import './CVContent.css';

function CVContent({ period, periodDesc, title, subTitle, desc, children}) {
  const periodDescs = period.split('-');
  const start = periodDescs[0];
  const end = periodDescs[1];

  const timeline = []
  if (start === end) timeline.push(start);
  else {
    timeline.push(end);
    timeline.push("|");
    timeline.push(start);
  }

  return (
    <div className="cv__main-content">
      <div className="cv__main-content-side">
        { timeline.map((item) => (<small>{item}</small>))}
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
