import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Styles/Home.css'

function Home() {
    const navigator=useNavigate()
    const [name,setname]=useState("")
    const [mail,setmail]=useState("")
    const [mobile,setmobile]=useState("")
    const [college,setcollege]=useState("")
    useEffect(() => {
        if(window.screen.width<=800){
            alert("Please attend the contest in a laptop")
            
        }
    }, [])
    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    const handleclick=async()=>{
        // email validation
        if(!validateEmail(mail))
        {
            alert("Invalid Email")
            return 
        }
        //mobile validation
        if(mobile.length!==10)
        {
            alert("Invalid Mobile Number")
            return
        }
        //college validation
        if(college.length===0)
        {
            alert("Invalid College Name")
            return
        }
        //name validation
        if(name.length===0)
        {
            alert("Invalid Name")
            return
        }
        const data={
            name,
            mail,
            college,
            mobile
        }
        localStorage.setItem("userdata",JSON.stringify(data))
        navigator('/main')

    }
    return (
        <div>
            <div className='navbar'>
                <div className='navbar-logo'>
                    <img src={require('../../Assets/logo.png')} alt="logo" />
                </div>
            </div>
            <div className='content1'>
                <div className='h1'>Blind code</div>
                <p>Code whaterver you want Code whaterver you want Code whaterver you want  </p>
            </div>
            <div className='content2'>
                <div className='input-con'>
                    <div className='input-container'>
                    <img src={require("../../Assets/Icons/round.png")}/>
                        <input placeholder='Name' onChange={e=>setname(e.target.value)}/>
                    </div>
                    <div className='input-container'>
                    <img src={require("../../Assets/Icons/mail.png")}/>
                        <input placeholder='Email' onChange={e=>setmail(e.target.value)}/>
                    </div>
                    <div className='input-container'>
                    <img src={require("../../Assets/Icons/college.png")}/>
                        <input placeholder='Institution' onChange={e=>setcollege(e.target.value)} />
                    </div>
                    <div className='input-container'>
                        <img src={require("../../Assets/Icons/mobile.png")}/>

                        <input placeholder='Mobile' onChange={e=>setmobile(e.target.value)} />
                    </div>

                </div>
                <div className='content3'>
                    <div className='btn-container' onClick={handleclick}>
                    <button className='main-btn'>Let's begin</button>
                    <img src={require("../../Assets/Icons/right.png")}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
