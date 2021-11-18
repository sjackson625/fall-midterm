import React from "react";

const NavItem = (props) => {
  const updateSection = (section) => {
    props.setSection(section);
  };
 const { navItem, section} = props;
  return (
    <li>
      <a
        className={navItem === section ? "active" : ""}
        href={`#${navItem}`}
        onClick={() => updateSection(navItem)}
      >
        {props.navItem}
      </a>
    </li>
  );
};
export default NavItem;
