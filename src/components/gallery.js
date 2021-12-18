import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import HTitle from "./title";

function Gallery({ images, title, setFullscreenElement }) {
  const imagesJSX = images.map(
    ({ picture: { gatsbyImageData, alt } = {} }, i) => (
      <button
        className='wrapper'
        onClick={() => setFullscreenElement(<GatsbyImage image={gatsbyImageData} alt={alt + ' fullscreen'} />)}
        key={alt}
      >
        <GatsbyImage
          image={gatsbyImageData}
          alt={alt}
          className='gallery-image'
          // width='100%'
          // height='100%'
        />
      </button>
    )
  );
  return (
    <section className='images'>
      <HTitle>{title}</HTitle>
      <div className='gallery'>{imagesJSX}</div>
    </section>
  );
}

export default Gallery;
