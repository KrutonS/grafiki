import React from "react";
import Gallery from "./gallery";
import SVGS from "./svgs";
import Videos from "./videos";

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Main({
  setFullscreenElement,
  options,
  activeCategory,
  data: { images, svgs, videos },
}) {
  function filterCategory(optionIndex) {
    return options[optionIndex] === activeCategory || activeCategory === null;
  }
  const titles = options.map((o) => capitalize(o.label));
  return (
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
      {filterCategory(2) && <Videos videos={videos.nodes} title={titles[2]} />}
    </main>
  );
}

export default Main;
