import React, { Component } from 'react';
import css from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../Hoc/Aux/Aux';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}>
          <div className={css.Modal} style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-200vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
            {this.props.children}
          </div>
        </Backdrop>
      </Aux>
    )
  }
};

export default Modal;