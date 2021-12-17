import React, { useState } from "react";

export default function useFullscreen() {
  const [active, setActive] = useState(null);
  const disable = () => {
    setActive(null);
  };
  const fullscreenNode = (
    <div className='fullscreen' onClick={disable}>
      {/* <div className='fullscreen-bg' onClick={disable} /> */}
      {active}
    </div>
  );
  return {
    setFullscreenElement: setActive,
    fullscreenNode: active ? fullscreenNode : null,
  };
}
