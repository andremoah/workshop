import { Fireworks } from 'fireworks-js/dist/react'
import React from 'react'

const MyFireworks = () => {
    const options = {
        speed: 3
    }

    const style = {
        height: '100%',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1
    }

    return (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                width: '100%'
            }}
        >
            <p style={{ color: 'white', fontSize: 20 }}>Obrigado, Glintt HS</p>
            <Fireworks options={options} style={style} />
        </div>
    )
}

export default MyFireworks
