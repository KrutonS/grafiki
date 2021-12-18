import React, { memo } from "react";

const Technologies = memo(() => {
  return (
    <div className='technologies '>
      <h4 className='accent-text'>Najczęstsze narzędzia</h4>
      <ul className='low-opacity'>
        <li>
          <small>Photoshop</small>
        </li>
        <li>
          <small>Blender</small>
        </li>
        <li>
          <small>Figma</small>
        </li>
        <li>
          <small>InkScape</small>
        </li>
      </ul>
    </div>
  );
});

export default Technologies;
