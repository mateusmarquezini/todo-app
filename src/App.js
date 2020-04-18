import 'gestalt/dist/gestalt.css';
import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './layout/Navbar';
import FirstAccess from './pages/FirstAccess/index';
import Todo from './pages/Todo';

function App() {

  const firstAccess = useSelector(state => state.todo.user.firstAccess);

  return (
    <>
    {firstAccess ? <FirstAccess /> : (
      <>
        <Navbar />
        <Todo />
      </>
    )}
    </>
  );
}

export default App;
