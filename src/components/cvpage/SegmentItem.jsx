import React from "react";

function SegmentItem({ title, value, score, isLink }) {
  return (
    <>
      <h4>
        {title || "Default Title"} {!score ? "" : `: ${score}/100`}
      </h4>
      {!value ? (
        ""
      ) : isLink ? (
        <div className="segment__link">
          <a href={isLink} target="_blank" rel="noreferrer">
            {value}
          </a>
        </div>
      ) : (
        <h5>{value}</h5>
      )}
      {!score ? (
        ""
      ) : (
        <div className="score_box">
          <div className="score_bar" style={{ width: `${score}%` }}></div>
        </div>
      )}
    </>
  );
}

export default SegmentItem;
