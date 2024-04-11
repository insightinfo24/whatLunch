import React from 'react';
import MenuTemplate from './components/MenuTemplate/MenuTemplate';
import LeftMenu from './components/LeftMenu/LeftMenu';

function App() {
  return (
    <div className="MenuTemplate">
      <LeftMenu />
      <MenuTemplate />
    </div>
  );
}

export default App;
