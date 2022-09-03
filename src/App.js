import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="app">
      {!user ? (
        <Login setUser={setUser} />
        ) : (
        <>
          <Header />

          <div className='app_body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
