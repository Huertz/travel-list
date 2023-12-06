import React from 'react';
import ReactDOM from 'react-dom/client';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='app'>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  </React.StrictMode>
);
