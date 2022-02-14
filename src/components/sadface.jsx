import React from 'react'
import img from './sadface.png'

const SadFace = () => (
    <div
        style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center',
            width: '100%'
        }}
    >
        <img src={img} style={{ height: 100, width: 100 }} />
        <p style={{ color: 'white', fontSize: 20 }}>Obrigado, Glintt HS</p>
    </div>
)

export default SadFace
