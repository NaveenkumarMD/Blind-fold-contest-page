import React, { useState, useEffect, useRef } from 'react'
import '../../Styles/Home.css'
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import { InfinitySpin } from "react-loader-spinner"
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'
import MyTimer from '../MyTimer';
import Editorx from '../Editor';
import Modalx from '../Modalx';
const firebaseApp = initializeApp({
    apiKey: "AIzaSyBW0vHmGlPtsVq-SL6Udk6mYsrf8FANPs4",
    authDomain: "blindcode-7401c.firebaseapp.com",
    projectId: "blindcode-7401c",
    storageBucket: "blindcode-7401c.appspot.com",
    messagingSenderId: "244624256171",
    appId: "1:244624256171:web:000be62275cb212e02dbee",
    measurementId: "G-0MTQGW1YR3"
})
const db = getFirestore()
let warningcontent = "You have found to be cheating in the contest.Please turn on full screen mode and don't try to move to another tabs.Otherwise contest will be closed and your clode will be submitted."
let modaltitle = "Warning"
function Main() {
    const navigator = useNavigate()
    const [code, setCode] = useState("");
    const [cheatcount, setcheatcount] = useState(0)
    const contentref = useRef(null)
    const blankref = useRef(null)
    const circleref = useRef(null)
    const loaderref = useRef(null)
    const timerref = useRef(null)
    const [value, setValue] = useState("def main():\n\tprint('Hello World')")
    const [language, setlanguage] = useState("python")
    const [fullscreen, setfullscreen] = useState(false)
    const time = new Date();
    const mainref = useRef(null)
    const [modalIsOpen, setIsOpen] = useState(false)
    time.setSeconds(time.getSeconds() + 1200);
    useEffect(() => {
        document.addEventListener("keyup", (e) => {
            handlecodechange()
        })
        //restrict right click
        document.oncontextmenu = function () {
            return false;
        }
        //restrict copy paste
        document.oncopy = function (e) {
            e.preventDefault();
            alert("Dont try to cheat")
        }
        document.onpaste = function (e) {
            e.preventDefault();
            alert("Paste is not allowed");
        }
        //open the page in full screen
        window.addEventListener("keyup", function (e) {

        })
        loaderref.current.style.display = "none"
        //function on fullscreen change
        document.addEventListener("fullscreenchange", function () {
            if (!document.fullscreenElement) {
                contentref.current.style.filter = "blur(5px)"
                setfullscreen(false)
                //increment cheatcount
                setcheatcount(e => e + 1)
                console.log(cheatcount)
                setIsOpen(true)

            }
            else {
                contentref.current.style.filter = ""
                setfullscreen(true)
            }
        });


    }, [])
    useEffect(() => {
        if (code.length > 0) {
            blankref.current.innerHTML = ""
        }
        else {
            blankref.current.innerHTML = "(blank)"
        }
    }, [code])
    const handleclick = () => {
        var htmlelement = document.documentElement
        htmlelement.requestFullscreen()
        setfullscreen(true)

    }
    const handlefullscreenclick = () => {
        if (!document.fullscreenElement) {
            var htmlelement = document.documentElement
            htmlelement.requestFullscreen()
            setfullscreen(true)
        }

    }
    const submit = async () => {
        mainref.current.style.filter = "blur(10px)"
        loaderref.current.style.display = "block"
        const userdata = await JSON.parse(localStorage.getItem("userdata"))
        const data = {
            name: userdata.name,
            email: userdata.mail,
            college: userdata.college,
            mobile: userdata.mobile,
            code: code,
            language: language
        }
        if (code.length === 0) {
            alert("Code is empty")
            return
        }
        try {
            const docref = await addDoc(collection(db, "data"), data)
            console.log("Code submitted successfully")
            localStorage.clear()
            navigator("/code", {
                state: {
                    code: code
                }
            })
        }
        catch (e) {
            console.error("Error adding document", e)
        }
    }
    const handleexpire = () => {
        alert("Contest has expired")
        if (code.length == 0) {
            setCode("none")
        }
        submit()
    }
    const handlecodechange = () => {
        console.log("code changed")

        circleref.current.style.display = "block"
        setTimeout(() => {
            circleref.current.style.display = "none"
        }, [200])

    }
    return (
        <>
            <div ref={loaderref} style={{ position: "fixed", display: "flex", width: "100%", marginTop: "10%", marginLeft: "45%", justifyContent: "center", alignItems: "center", zIndex: 999999 }}>
                <InfinitySpin color="rgb(36,180,126)" />
            </div>

            <div style={{ position: "relative" }} ref={mainref}>


                <Modalx times={cheatcount} content={warningcontent} title={modaltitle}
                    modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} closecontest={handleexpire}
                />
                <div className='navbar navbarx'>
                    <div className='navbar-logo'>
                        <img src={require('../../Assets/logo.png')} alt="logo" />
                    </div>
                    <div ref={timerref}>
                        <MyTimer expiryTimestamp={time} onexpirefunction={handleexpire} />
                    </div>
                </div>
                <div className='main-container'>

                    <div className="section1">
                        <div className='h1'>Blind code</div>
                    </div>
                    <div className="section2">
                        <div className='h3'>Round:1</div>
                    </div>

                    <div className="section3" ref={contentref}>
                        <div>
                            Given an array of integers and a positive integer , determine the number of  pairs where  and  +  is divisible by .
                        </div>
                        <div className='h4'>
                            Example
                        </div>
                        <div>
                            Three pairs meet the criteria:  and .
                        </div>
                        <div className='h4'>
                            Function description
                        </div>
                        <div>
                            Complete the divisibleSumPairs function in the editor below.<br />

                            divisibleSumPairs has the following parameter(s):<br />

                            int n: the length of array<br />
                            int ar[n]: an array of integers<br />
                            int k: the integer diviso<br />
                        </div>
                        <div className='h4'>
                            Returns
                        </div>
                        <div>
                            - int: the number of pairs
                        </div>
                        <div className='h4'>
                            Input format
                        </div>
                        <div>
                            The first line contains  space-separated integers,  and .
                            The second line contains  space-separated integers, each a value of .
                        </div>
                        <div className='h4'>
                            Constarints
                        </div>
                        <div>
                            - int: the number of pairs
                        </div>
                        <div className='h4'>
                            Sample input
                        </div>
                        <div className='code'>
                            - int: the number of pairs
                        </div>
                        <div className='h4'>
                            Sample output
                        </div>
                        <div className='code'>
                            - int: the number of pairs
                        </div>
                        <div className='h4'>
                            Explanation
                        </div>
                        <div>
                            - int: the number of pairs
                        </div>

                    </div>
                    <div className='dia'>
                        <div className='h4'>
                            Code
                        </div>
                        <div className='circle' ref={circleref}>

                        </div>
                        <div>
                            <select name="language" id="language" onChange={e => setlanguage(e.target.value)}>
                                <option value="python">Python</option>
                                <option value="C">C</option>
                                <option value="C++">C++</option>
                                <option value="java">java</option>
                                <option value="javascript">javascript</option>
                            </select>
                        </div>

                    </div>
                    <div style={{ marginBottom: "20px" }} ref={blankref}>(blank)</div>
                    <Editorx clickprop={handleclick}
                        lang={language}
                        value={code}
                        setValue={setCode}
                    />

                    {
                        !fullscreen &&
                        <div className='content3'>
                            <button className='submit' onClick={handlefullscreenclick}>Enter full screen</button>
                        </div>
                    }
                    <div className='content3'>
                        <button className='submit' onClick={submit}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
