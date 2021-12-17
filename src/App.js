import './App.css';
import CustomizedDialogs from './components/pop-up';
import Segment from './components/segment';

function App() {
  return (
    <div className="App">
      <CustomizedDialogs>
        <Segment/>
      </CustomizedDialogs>
    </div>
  );
}

export default App;
