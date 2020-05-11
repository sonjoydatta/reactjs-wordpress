import React from 'react';

import BrandArea from './BrandArea';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="Header">
      <BrandArea />
      <Navigation />
    </header>
  );
}

export default Header;