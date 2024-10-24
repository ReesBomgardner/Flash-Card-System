import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <h1 style = {{margin: '20px'}}>Flash Cards</h1>
      {children}
    </div>
  );
};

export default Layout;
