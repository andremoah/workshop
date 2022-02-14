import React, { useState } from 'react'

import Fireworks from 'components/fireworks'
import Layout from '@cockpit/layout'
import PropTypes from 'prop-types'
import SadFace from 'components/sadface'

const Home = () => {
    const [status, setStatus] = useState(null)
    if (status === 'success') return <Fireworks />
    if (status === 'insuccess') return <SadFace />

    return (
        <Layout
            title={{
                text: 'Agile Healthcare'
            }}
            actions={{
                error: {
                    label: 'Did not like it',
                    onClick: () => setStatus('insuccess')
                },
                success: {
                    label: 'Like it!',
                    onClick: () => setStatus('success')
                }
            }}
        >
            <div style={{ color: 'white' }}>Add Your Code Here</div>
        </Layout>
    )
}

Home.propTypes = {
    height: PropTypes.number
}

export default Home
