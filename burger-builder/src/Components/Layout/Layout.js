import React from 'react';
import Aux from '../../Hoc/Aux';

const Layout = (props) => (
  <Aux>
    <div>
      Toolbar, SideDrawer, Backdrop
    </div>,
    <main>
      {props.children}
    </main>
  </Aux>
);

export default Layout;