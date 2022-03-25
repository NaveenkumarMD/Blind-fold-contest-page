import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'

function SubmittedCode() {
    const location=useLocation()
    console.warn(location.state)
    useEffect(() => {
        window.history.pushState(null, null, window.location.pathname);
        window.onpopstate = function () {
            window.history.go(1);
        }
    }, [])
    return (
        <div
         style={{
             display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                height:"100vh",
                width:"100%",
                fontSize:"24px"
         }}
        >
            Your code has been successfully recieved.Will get back to you with the results soon.   Stay tuned!!!!!
        </div>
    )
}

export default SubmittedCode
