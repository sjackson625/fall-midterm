import React from "react";
import styled from "./story/styles"


const Header = (props) => {
  const { siteTitle } = props;
  return (
    <header>
      <h1>{siteTitle}</h1>
    </header>
  );
};

export default Header;
