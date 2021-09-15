import logo from './logo.svg';
import './App.css';

function App() {
  const proverbs = ["책임happy", "도덕적hey", "자연의 each","alone장악", "매관magic", "charm과 거짓", "혹세moomin", "부정buffet"];

  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> and save to reload.
        </p>
          {proverbs[getRandomIndex(proverbs.length)]}
      </header>
    </div>
  );
}

export default App;
