import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
const YoutubeEmbed = ({ videoId, title }) => {
  const { ref, inView } = useInView({ threshold: 0, rootMargin: "200px 0px" });
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    if (inView && !isShown) setIsShown(true);
  }, [inView, isShown]);
  return (
    <div className='video video-responsive' ref={ref}>
      {isShown ? (
        <iframe
          width='100%'
          // height="480"
          src={`https://www.youtube.com/embed/${videoId}?origin=https://grafikimaster.gatsbyjs.io/&enablejsapi=1`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title={title}
        />
      ) : (
        <h4 className='accent-text'>Ładowanie...</h4>
      )}
    </div>
  );
};

export default YoutubeEmbed;
