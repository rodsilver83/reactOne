import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import ToolBar from '../../Components/Navigation/Toolbar/Toolbar';
import css from './Layout.module.css';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false
    }
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  toggleSideDrawerHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    });
  }

  render() {
    return (
      <Aux>
        <ToolBar toggle={this.toggleSideDrawerHandler} />
        <SideDrawer
          toggle={this.toggleSideDrawerHandler}
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer} />
        <main className={css.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}
export default Layout;