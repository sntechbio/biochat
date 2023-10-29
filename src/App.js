import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHome from './AppHome';
import PaginaResposta from "./pages";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppHome/>}/>
        <Route path="/resposta/" element={<PaginaResposta/>}/>
      </Routes>
    </Router>
  );
}

export default App;



