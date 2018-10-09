import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxx/Auxx.js';
import Backdrop from '../Backdrop/Backdrop.js';


class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.show !== this.props.show) {
            return true
        }
    }

    componentWillUpdate () {
        console.log('[Modal] WillUpdate');
    }

    render() {
        return (
            <Aux>
                <Backdrop 
                    show={this.props.show}
                    clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1': '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;