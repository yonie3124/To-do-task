
import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className="App">
      <div id="Header">
        <Header/>
      </div>
      <div id="taskForm">
        <TaskForm />
      </div>
    </div>
  );
}

export default App;
