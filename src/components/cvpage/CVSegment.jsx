import React from "react";
import SegmentItem from "./SegmentItem";
import "./CVSegment.css";

function CVSegment({ title, items }) {
  return (
    <div className="cv__segment">
      <div className="tx__title">
        <h3>{title || "Default Title"}</h3>
      </div>

      {items.map((item, i) => (
        <SegmentItem
          key={i}
          title={item.title}
          value={item.value}
          value_list={item.value_list}
          score={item.score}
          isLink={item.isLink}
        />
      ))}
    </div>
  );
}

export default CVSegment;
