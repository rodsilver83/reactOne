import React from 'react';
import Aux from '../../Hoc/Aux';
import ToolBar from '../Navigation/Toolbar/Toolbar';
import css from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => (
  <Aux>
    <ToolBar />
    <SideDrawer />
    <main className={css.Content}>
      {props.children}
    </main>
  </Aux>
);

export default Layout;