
import './App.css';
import Logo from './Logo';

function App() {
  return (
    <div className='container'>
    <div className="App">
    <Logo/>
      <div className='AskBox'>
        <div className='column' style={{ width: "500px" }}>
          <div className='column'>
            <div style={{ fontSize: "30px" }}>ask me about immunology</div>
            <div>
              <div>
                <label className="form-label" />
                <textarea className="form-control" rows="4"></textarea>
              </div>
            </div>
            <div>
              <button className='buttonAsk'>Ask</button>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default App;
