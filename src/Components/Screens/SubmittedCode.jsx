import React from 'react'
import { useLocation } from 'react-router-dom'

function SubmittedCode() {
    const location=useLocation()
    console.warn(location.state)
    return (
        <div>
            {location.state.code}
        </div>
    )
}

export default SubmittedCode
