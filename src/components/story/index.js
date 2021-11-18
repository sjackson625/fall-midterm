import React from "react";
import { Wrapper, Entry, StoryImg, StoryTitle, StoryPara } from "./styles";

const Story = (props) => {
  const { abstract, title } = props;
  return (
    <Wrapper href={props.story.short_url}>
      <Entry>
        <StoryImg
          src={
            props.story.multimedia
              ? props.story.multimedia[0].url
              : "/img/no-image.png"
          }
          alt="images"
        />
        <div>
          <StoryTitle>{title}</StoryTitle>

          <StoryPara>{abstract}</StoryPara>
        </div>
      </Entry>
    </Wrapper>
  );
};

export default Story;
