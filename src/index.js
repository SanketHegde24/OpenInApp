import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import Auth from './components/auth';
import auth from './firebase/auth/index.js';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Router() {
  const [user, setUser] = useState(null)

  useEffect(() => {
      onAuthStateChanged(auth, user => {
          if (user) {
              console.log(user)
              setUser(user)
          } else {
              console.log("No user")
              setUser(null)
          }
      })
  }, [])


  return (
    <React.StrictMode>
        {
          user ? <App user={user} /> : <Auth />
        }
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();