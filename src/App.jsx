/* eslint-disable no-process-env */

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import Home from 'pages/home'
import PropTypes from 'prop-types'
import React from 'react'
import Widget from '@cockpit/frontend/widget'
import manifest from '../public/manifest.json'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.client = new ApolloClient({
            cache: new InMemoryCache(),
            uri: this.props.middleware
        })
    }

    // eslint-disable-next-line class-methods-use-this
    componentDidCatch(error, errorInfo) {
        console.error(error)
        console.log(errorInfo)
    }

    render() {
        return (
            <ApolloProvider client={this.client}>
                <Widget manifest={manifest} widgetName={this.props.appName}>
                    <Home {...this.props} />
                </Widget>
            </ApolloProvider>
        )
    }
}

App.propTypes = {
    appName: PropTypes.string,
    middleware: PropTypes.string
}

export default App
