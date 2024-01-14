import { useState } from 'react';

const Demo = () => {
    console.log('Rendering Demo...')
    const [text,setText]= useState('');
  return (
    <div className="demoClass">Demo
    <div>
        <input type="text" value={text} 
        onChange={(e)=>setText(e.target.value)}/>
    </div>
    </div>
  )
}

export default Demo