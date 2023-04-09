import './App.css';
import Profile from './Components/Profile'
import Portfolio from './Components/Portfolio';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMusic, faCircleUser, faComputer, faLightbulb } from '@fortawesome/free-solid-svg-icons';

function App() {
  library.add(faMusic, faCircleUser, faComputer, faLightbulb)
  let style = {
    justifyContent: 'space-evenly',
    display: 'flex',
    width: '100%',
    height: '100%',
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
