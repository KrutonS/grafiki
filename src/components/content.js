import React, { useLayoutEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "./header";
import Main from "./main";
import Select from "./select";
import Technologies from "./technologies";

const options = [
  { value: "logo", label: "wektory" },
  { value: "3d", label: "obrazy 3D" },
  { value: "video3d", label: "video 3D" },
];
function Content({ setFullscreenElement, data }) {
  const [category, setCategory] = useState(null);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [category]);
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <Header />
      <Technologies />
      <Select
        noChoiceText='wszystko'
        options={options}
        label={"Pokaż mi..."}
        selected={category}
        setSelected={(sel) =>
          sel === category ? setCategory(null) : setCategory(sel)
        }
      />
      <Main
        setFullscreenElement={setFullscreenElement}
        activeCategory={category}
				options={options}
				data={data}
      />
      <small>Copyright 2021 Marcin Smarzewski</small>
    </>
  );
}

export default Content;
