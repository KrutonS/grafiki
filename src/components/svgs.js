import React, { useState } from "react";
import useFullscreen from "../../utils/fullscreen";
import HTitle from "./title";

function SVGS({ svgs, title, setFullscreenElement }) {
  const svgJSX = svgs.map((svg, i) => (
    <div
      className='svg-wrapper'
      title={svg.alt}
      dangerouslySetInnerHTML={{ __html: svg.svg }}
      key={svg.alt}
      onClick={() => setFullscreenElement(svgJSX[i])}
    />
  ));
  return (
    <section className='svgs'>
      <HTitle>{title}</HTitle>
      <div className='svgs-container'>{svgJSX}</div>
    </section>
  );
}

export default SVGS;
