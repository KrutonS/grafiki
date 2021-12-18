import React from "react";
import HTitle from "./title";
import YoutubeEmbed from "./video";

function Videos({ videos, title }) {
  return (
    <section className='videos'>
      <HTitle>{title}</HTitle>
      {videos.map(({ yt: { title, videoId } }) => (
        <YoutubeEmbed key={videoId} videoId={videoId} title={title} />
      ))}
    </section>
  );
}

export default Videos;
