import React from "react";
import accessibleClick from "../../utils/accessibleClick";
import HTitle from "./title";

function Svgs({ svgs, title, setFullscreenElement }) {
  const svgJSX = svgs.map((svg, i) => (
    <div
      className='svg-wrapper'
      title={svg.alt}
      dangerouslySetInnerHTML={{ __html: svg.svg }}
      key={svg.alt}
      {...accessibleClick(() => setFullscreenElement(svgJSX[i]))}
    />
  ));
  return (
    <section className='svgs'>
      <HTitle>{title}</HTitle>
      <div className='svgs-container'>{svgJSX}</div>
    </section>
  );
}

export default Svgs;
