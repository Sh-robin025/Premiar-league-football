
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import errorImg from './images/notFound.png'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <div className="text-center">
            <img style={{ weight: '80%' }} src={errorImg} alt="" />
          </div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
