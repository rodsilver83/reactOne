import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Modal from '../../Components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      }

      this.interceptors = [];

      this.interceptors.push(axios.interceptors.response.use(req => {
        this.state = {
          error: null
        }
        return req;
      }))

      this.interceptors.push(axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error });
      }))
    }

    componentWillUnmount = () => {
      this.interceptors.forEach(interceptor => {
        axios.eject(interceptor);
      });
    }

    erroConfirmedHandler = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <Aux>
          <Modal show={this.state.error}
            modalClosed={this.erroConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  }
}

export default withErrorHandler;