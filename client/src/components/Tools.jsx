import React from "react";

function Tools({ tools, addFilterValue }) {
  return (
    <>
      {tools.map((tool, index) => (
        <div className="tools" key={index} onClick={(e) => addFilterValue(e)}>
          {tool}
        </div>
      ))}
    </>
  );
}

export default Tools;
