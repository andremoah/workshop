import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: props => <App middleware={'/middleware-boilerplate/'} {...props} />
})

export const bootstrap = props => reactLifecycles.bootstrap(props)

export const mount = props => reactLifecycles.mount(props)

export const unmount = props => reactLifecycles.unmount(props)
