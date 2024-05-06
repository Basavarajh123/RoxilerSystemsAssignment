import {Routes,Route} from "react-router-dom"
import Home from './components/Home';


function App() {
  return (
    <Routes className="App">
      <Route exact path="/" Component={Home} />
    </Routes>
  );
}

export default App;
