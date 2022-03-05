import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import '../Styles/Home.css'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width:"300px",
    transform: 'translate(-50%, -50%)',
    backgroundColor:"#2f3038",
    border:"2px solid white"
    
  },
  overlay:{
        backgroundColor:"rgba(0,0,0,0.5)"
  }
};



function Modalx({times,content,title,modalIsOpen,setIsOpen,closecontest}) {
  let subtitle;

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(()=>{
    if(3-times<=0){
      closecontest()
    }
  },[times])
  return (
    <div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"    
   

      >
          <div className='modal_container-top'>
              <div style={{fontSize:"20px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"3px"}}>
                  <img src={require("../Assets/Icons/warning.png")} width="30px" height="30px"/>
                  {title}</div>
              <img src={require('../Assets/Icons/cross.png')} onClick={closeModal} alt="warning" />
            </div>
            <div className='modal_content'>
             {content}
            </div>
            <div>
                {3-times} attempts left
            </div>
      </Modal>
    </div>
  );
}
export default Modalx