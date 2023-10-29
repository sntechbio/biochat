
import './AppHome.css';
import Logo from './Logo';
import ButtonAsk from './components';

function AppHome() {
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
            <ButtonAsk label={"ask"} href={"/resposta/"}/>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default AppHome;
