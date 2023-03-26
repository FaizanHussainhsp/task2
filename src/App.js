import { Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Home />
      </Route>
    </div>
  );
}

export default App;
