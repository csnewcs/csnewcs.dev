import './App.css';
import Profile from './Components/Profile'
import Portfolio from './Components/Portfolio';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMusic, faCircleUser, faComputer } from '@fortawesome/free-solid-svg-icons';

function App() {
  library.add(faMusic, faCircleUser, faComputer)
  let style = {
    justifyContent: 'space-evenly',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100vw',
    height: '90vh',
    alignItems: 'center'
  }
  return (
    <div className="App" style={style}>
      <Profile />
      <Portfolio />
    </div>
  );
}

export default App;
