import App from './App'
import DevelopmentWidget from '@cockpit/frontend/dev'
import React from 'react'
import ReactDOM from 'react-dom'
import manifest from '../public/manifest.json'

const Widget = () => (
    <DevelopmentWidget appName={'therap-score-rules-widget'} manifest={manifest}>
        <App
            middleware={'https://cockpit-swarm-gateway.glinttlab.com/middleware-boilerplate/'}
            appName="therap-score-rules-widget"
        />
    </DevelopmentWidget>
)

ReactDOM.render(<Widget />, document.getElementById('root'))
