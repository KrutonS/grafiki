import { graphql } from "gatsby";
import React, { useLayoutEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Gallery from "../components/gallery";
import Select from "../components/select";
import SVGS from "../components/svgs";
import Videos from "../components/videos";
import "../style.scss";
import useFullscreen from "../../utils/fullscreen";

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const options = [
  // { label: "wszystko", value: "all" },
  { value: "logo", label: "wektory" },
  { value: "3d", label: "obrazy 3D" },
  { value: "video3d", label: "video 3D" },
];

const titles = options.map((o) => capitalize(o.label));
function Home({ data: { images, svgs, videos } }) {
  const [category, setCategory] = useState(null);
  const { fullscreenNode, setFullscreenElement } = useFullscreen();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  function filterCategory(optionIndex) {
    return options[optionIndex] === category || category === null;
  }
  return (
    <div className='content'>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <header>
        <h1>Portfolio</h1>
        <h2 className='accent-text'>Grafiki</h2>
        <h3>Marcin Smarzewski</h3>
      </header>
      <div className='technologies '>
        <h4 className='accent-text'>Najczęstsze narzędzia</h4>
        <ul className='low-opacity'>
          <li>Photoshop</li>
          <li>Blender</li>
          <li>Figma</li>
          <li>InkScape</li>
        </ul>
      </div>
      <Select
        noChoiceText='wszystko'
        options={options}
        label={"Pokaż mi..."}
        selected={category}
        setSelected={(sel) =>
          sel === category ? setCategory(null) : setCategory(sel)
        }
      />
      <main>
        {filterCategory(0) && (
          <SVGS
            svgs={svgs.nodes}
            title={titles[0]}
            setFullscreenElement={setFullscreenElement}
          />
        )}
        {filterCategory(1) && (
          <Gallery
            images={images.nodes}
            title={titles[1]}
            setFullscreenElement={setFullscreenElement}
          />
        )}
        {filterCategory(2) && (
          <Videos videos={videos.nodes} title={titles[2]} />
        )}
      </main>
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
          videoId:providerUid
          title
        }
      }
    }
  }
`;
export default Home;
