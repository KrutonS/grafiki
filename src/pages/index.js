import { graphql } from "gatsby";
import React from "react";
import useFullscreen from "../../utils/fullscreen";
import Content from "../components/content";
import "../style.scss";

function Home({ data }) {
  const { fullscreenNode, setFullscreenElement } = useFullscreen();
  return (
    <div className='content'>
      <Content setFullscreenElement={setFullscreenElement} data={data} />
      {fullscreenNode}
    </div>
  );
}
export const query = graphql`
  query GraphicsQuery {
    images: allDatoCmsBlender {
      nodes {
        picture {
          gatsbyImageData(
            placeholder: BLURRED
            forceBlurhash: true
            layout: CONSTRAINED
            width: 1920
          )
          alt
        }
      }
    }
    svgs: allDatoCmsVector {
      nodes {
        alt
        svg
        title
      }
    }
    videos: allDatoCmsVideo {
      nodes {
        yt {
          videoId: providerUid
          title
        }
      }
    }
  }
`;
export default Home;
