import React, { memo } from "react";

const Header = memo(() => {
  return (
    <header>
      <h1>Portfolio</h1>
      <h2 className='accent-text'>Grafiki</h2>
      <h3>Marcin Smarzewski</h3>
      <h4>
        <a className='accent-text' href='https://github.com/krutonS'>
          https://github.com/krutonS
        </a>
      </h4>
    </header>
  );
});

export default Header;
