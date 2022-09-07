import './App.css';
import Profile from './Components/Profile'
import ProjectItem from './Components/ProjectItem';
import Portfolio from './Components/Portfolio';

function App() {
  let style = {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  }
  return (
    <div className="App" style={style}>
      <Profile />
      <Portfolio />
    </div>
  );
}

export default App;
