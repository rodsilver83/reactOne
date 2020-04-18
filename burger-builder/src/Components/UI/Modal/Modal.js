import React from 'react';
import css from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../Hoc/Aux';

const Modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed}>
    </Backdrop>
    <div className={css.Modal} style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0'
    }}>
      {props.children}
    </div>
  </Aux>
);

export default Modal;