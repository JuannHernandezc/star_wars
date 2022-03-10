import Characters from "./components/Characters";
import { BrowserRouter} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Characters/>
      </BrowserRouter>
    </div>
  );
}

export default App;
