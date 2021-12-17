import React from "react";
import Video from "react-player/lazy";
import HTitle from "./title";

function Videos({ videos, title }) {
  return (
    <section className='videos'>
      <HTitle>{title}</HTitle>
      {videos.map(({ yt: { title, url } }) => (
        <Video url={url} title={title} controls width='100%' height='50vh' className="video" key={title}/>
      ))}
    </section>
  );
}

export default Videos;
