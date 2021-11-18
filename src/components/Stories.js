import React from "react";
import Story from "./story/index";

const Stories = (props) => {
  const {section, stories} = props;
  return (
    <div className="site-wrap">
      <h2 className="section-head">{section}</h2>
      {stories.map((story, index) => (
        <Story key={index} story={story} />
      ))}
    </div>
  );
};

export default Stories;
