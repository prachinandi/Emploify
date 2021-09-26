import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Hire from "./pages/Hire";
import About from "./pages/About";
import Regs from "./pages/Reg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hire" exact component={Hire} />
          <Route path="/about" exact component={About} />
          <Route path="/Register" exact component={Regs} />
          
        </Switch>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
