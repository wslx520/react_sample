import React from 'react'

export default function(loadPromise) {
    return class AsyncComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                Component: null
            }
        }

        componentWillMount() {
            console.log(this.hasLoaded())
            if (this.hasLoaded()) {
                return;
            }
            loadPromise()
                .then(module => {console.log(module);return module.default})
                .then( Component => this.setState({Component}))
                .catch( err => console.error('Can not load AsyncComponent'));
        }

        hasLoaded() {
            return this.state.Component !== null;
        }
        render() {
            const {Component} = this.state;
            return Component ? <Component {...this.props} /> : null;
        }
    }
}