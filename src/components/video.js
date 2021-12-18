import React from "react";
import { InView } from "react-intersection-observer";
const YoutubeEmbed = ({ videoId, title }) => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <div className='video video-responsive' ref={ref}>
          {inView && (
            <iframe
              width='100%'
              // height="480"
              src={`https://www.youtube.com/embed/${videoId}?origin=https://grafikimaster.gatsbyjs.io/&enablejsapi=1`}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              title={title}
            />
          )}
        </div>
      )}
    </InView>
  );
};

export default YoutubeEmbed;
