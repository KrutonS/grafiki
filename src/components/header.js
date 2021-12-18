import React, { memo } from "react";

const Header = memo(() => {
  return (
    <header>
      <h1>Portfolio</h1>
      <h2 className='accent-text'>Grafiki</h2>
      <h3>Marcin Smarzewski</h3>
    </header>
  );
});

export default Header;
