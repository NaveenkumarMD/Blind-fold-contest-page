import React from 'react'
import Navbar from '../Navbar'
import '../../Styles/navbar.css'
import Paircoding from '../.././Assets/pair_coding.svg'
function Startpage() {
    return (
        <div>
            <Navbar />
            <div className='startpage'>
                <div className='startpage-content'>
                    <div className='h1'>
                        CODING CLIENT
                    </div>
                    <div className='p'>
                        Create your own coding contest fo free.Enjoy the freedom of framing your own questions and challenge your friends.
Cirrus clouds are atmospheric clouds characterized by thin, wispy strands, often bunched into tufts. 
                    </div>
                    <div className='btns'>
                        <div className='secondary'>
                            Create contest
                        </div>
                        <div className='primary'>
                            Join contest
                        </div>
                    </div>
                </div>
                <div className='startpage-img'>
                    <img src={Paircoding} alt="Pair Coding" />
                </div>

            </div>
        </div>
    )
}

export default Startpage
