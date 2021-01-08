import React from 'react'
import { Spring } from 'react-spring/renderprops';

export default function Component1() {
    return (
        <Spring
            from={{ opacity: 0, marginTop: -100}}
            to={{ opacity: 1, marginTop: 0 }}
            config={{ delay: 1000, duration: 1000}}
        >
            { props => (
                <div style={props}>
                    <div style={c1Style}>
                        <h1>Component 1</h1>
                    </div>
                </div>
            )}
        </Spring>
    )
}



const c1Style = {
    color: '#834521',
    marginTop: 100
}
