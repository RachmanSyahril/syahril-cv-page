import React from "react";
import "./CVContent.css";

function CVContent({ title, subTitle, period, place, desc }) {
  return (
    <div>
      <div className="cv__main-content">
        <div className="cv__main-content-title">
          <strong>{title}</strong>
          <small>{subTitle}</small>
        </div>
        <div className="cv__main-content-side">
          <span>{place}</span>
          <small>{period}</small>
        </div>
      </div>
      {desc && (
        <p>
          &nbsp;&#8226;&nbsp;
          <small>{desc}</small>
        </p>
      )}
    </div>
  );
}

export default CVContent;
