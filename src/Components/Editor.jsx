import React, { useState } from 'react'

import { CodeEditorEditable } from 'react-code-editor-editable'
import 'highlight.js/styles/dracula.css';

const Editorx = ({clickprop,lang,value,setValue}) => {
  return (
    <div className='center' onClick={clickprop}  >
      <CodeEditorEditable
        value={value}
        setValue={setValue}
        width='50vw'
        height='50vh'
        language="string"
        inlineNumbers
        caretColor='transparent'
        borderRadius={5}
      />
    </div>
  )
}

export default Editorx