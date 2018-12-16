import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMsg: ''
    }

    // life-cycle method
    componentDidCatch = (err, info) => {
        this.setState({ hasError: true, errorMsg: err })
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMsg}</h1>;
        } else {
            // default case
            return this.props.children;
        }
    }
}

export default ErrorBoundary;