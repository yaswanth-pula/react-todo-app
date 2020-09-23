import React from 'react';
import Container from '@material-ui/core/Container';
import HeaderComponent from '../components/HeaderComponent';
import CssBaseline from '@material-ui/core/CssBaseline';
import TodoInputComponent from '../components/TodoInputComponent';
import TaskComponent from '../components/TaskComponent';
import '../css/App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
          <div className="App">
            <HeaderComponent />
            <TodoInputComponent />
            <TaskComponent taskText="Get My Snacks" />
        </div>
      </Container>
    </React.Fragment>
    
  );
}

export default App;
