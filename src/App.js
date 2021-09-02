/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';

function App() {

  const [hello, setHello] = useState('');
  const [user, setUser] = useState('')

  const openHello = async (e) => {
    e.preventDefault();
    setHello('Hello')
    const response = await fetch('https://api.github.com/users/kelvinmusselli');
    const json = await response.json();
    setUser(json.name);
  }

  useEffect(()=>{
    if(hello && user) {
      console.log(hello);
      console.log(user);
    }
  },[hello, user]);


  return (
    <form onSubmit={openHello}>
      <button type="submit">Olá</button>
      <p>{hello}, {user}</p>

    </form>
  );
}

export default App;
