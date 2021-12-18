import React, { useLayoutEffect, useRef, useState } from "react";
import accessibleClick from "./accessibleClick";

export default function useFullscreen() {
  const fullScreenHTML = useRef(null);

  const [active, setActive] = useState(null);
  const disable = () => {
    setActive(null);
  };
  const fullscreenNode = (
    <div
      className='fullscreen'
      {...accessibleClick(disable)}
      ref={fullScreenHTML}
    >
      {/* <div className='fullscreen-bg' onClick={disable} /> */}
      {active}
    </div>
  );
  return {
    setFullscreenElement: setActive,
    fullscreenNode: active ? fullscreenNode : null,
    // isActive: !!active,
		disable
  };
}
