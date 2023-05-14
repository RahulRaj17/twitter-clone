import './App.css';
import LeftPanel from './components/LeftPanel';
import MiddlePanel from './components/MiddlePanel';
import RightPanel from './components/RightPanel';

function App() {
  return (
    <div className="app">
      <LeftPanel />
      <MiddlePanel />
      <RightPanel />
    </div>  
  );
}

export default App;
