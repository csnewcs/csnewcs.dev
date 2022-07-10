import logo from './logo.svg';
import './App.css';
import './Components/RoundButton'
import RoundButton from './Components/RoundButton';

function App() {
  const githubLink = 'https://github.com/csnewcs'
  return (
    <div className="App">
      <RoundButton backgroundColor='gray' textColor='white' text='Github' image='https://github.githubassets.com/favicons/favicon.png' link={githubLink} />
    </div>
  );
}

export default App;
