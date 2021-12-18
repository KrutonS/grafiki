import React from "react";

const YoutubeEmbed = ({ videoId, title }) => (
  <div className="video video-responsive">
    <iframe
      width="100%"
      // height="480"
      src={`https://www.youtube.com/embed/${videoId}?origin=https://grafikimaster.gatsbyjs.io/&enablejsapi=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  </div>
);

export default YoutubeEmbed;