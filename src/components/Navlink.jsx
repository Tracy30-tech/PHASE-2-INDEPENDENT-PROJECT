import React from "react";

function Navlink() {
  const links = ["form", "content", "more"];

  return (<nav>
    <a key="form" href="#form">{links[0]}</a>
    <a key="content" href="#content">{links[1]}</a>
    <a key="more" href="#more">{links[2]}</a>
  </nav>)
}

export default Navlink;