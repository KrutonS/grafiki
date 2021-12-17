import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import HTitle from "./title";
import useFullscreen from "../../utils/fullscreen";

function Gallery({ images, title }) {
  const { setFullscreenElement, fullscreenNode } = useFullscreen();
  const imagesJSX = images.map(
    ({ picture: { gatsbyImageData, alt } = {} }, i) => (
      <span
        className='wrapper'
        onClick={() => setFullscreenElement(imagesJSX[i])}
        key={alt}
      >
        <GatsbyImage
          image={gatsbyImageData}
          alt={alt}
          className='gallery-image'
          width='100%'
          height='100%'
        />
      </span>
    )
  );
  return (
    <>
      <section className='images'>
        <HTitle>{title}</HTitle>
        <div className='gallery'>{imagesJSX}</div>
      </section>
      {fullscreenNode}
    </>
  );
}

export default Gallery;
