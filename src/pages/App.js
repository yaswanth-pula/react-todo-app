import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import TaskComponent from '../components/TaskComponent';
import TodoInputComponent from '../components/TodoInputComponent';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <TodoInputComponent />
    </div>
  );
}

export default App;
