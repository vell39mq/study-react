import './App.css';
import Show from './components/Show';
import Timer from './components/Timer';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Timer />
      <Todo />
      <Show />
    </div>
  );
}

export default App;
