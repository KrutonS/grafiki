import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import HTitle from "./title";
import useFullscreen from "../../utils/fullscreen";

function Gallery({ images, title }) {
  const { setFullscreenElement, fullscreenNode } = useFullscreen();
  const imagesJSX = images.map(
    ({ picture: { gatsbyImageData, alt } = {} }, i) => (
      <div
        className='wrapper'
        onClick={() => setFullscreenElement(imagesJSX[i])}
      >
        <GatsbyImage
          image={gatsbyImageData}
          alt={alt}
          className='gallery-image'
          width='100%'
          height='100%'
          key={alt}
        />
      </div>
    )
  );
  console.log(fullscreenNode);
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
