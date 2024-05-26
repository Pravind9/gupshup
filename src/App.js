import React, { useState } from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import UnsecLayout from './components/unsecure/layout/UnsecLayout';
import SecureLayout from './components/secure/layout/SecureLayout';


function App() {

  const [person, setPerson] = useState(() => {
    const localPerson = localStorage.getItem("person");
    const storedPerson = JSON.parse(localPerson);
    return storedPerson || "";
  });

  const [loggedIn, setLoggedIn] = useState(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    return isLoggedIn || false;
  });

  console.log("APP::LoggedIn ", loggedIn, "APP::person ", person);


  return (
   // <>
    //  {loggedIn ? <SecureLayout /> : <UnsecLayout />}
   // </>
     <Layout />
  );
}

export default App;
