import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginForm from './Components/Login/LoginForm';
import RegisterForm from './Components/Register/RegisterForm';

function App() {
  return (
    <div>
      <Routes>
        <Route path= "/" element={<LoginForm />} />
        <Route path= "/register" element={<RegisterForm />} />
      </Routes>
    </div>
    // <div>
    //   <LoginForm/>
    // </div>
    
  );
}


export default App;
