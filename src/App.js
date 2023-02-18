import React, { useState } from 'react';
import './app.css';
import Contact from './components/Contact'

const App = () => {
  const [popupMessage, setPopupMessage] = useState(false);
  
  return (
    <div className='app'>
      <span 
        className='message'
        style={{display: !popupMessage && "none"}}
        onClick={() => setPopupMessage(!popupMessage)}
      >
        Email was sent successfully
      </span>
      <h1>Contact Page</h1>
      <Contact setPopupMessage={setPopupMessage}/>
    </div>
  )
}

export default App