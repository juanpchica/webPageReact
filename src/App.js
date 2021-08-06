import './App.scss';
import { Navbar } from './components/Navbar/Navbar';

//React router
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Service } from './pages/Service';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/product" component={Product}/>
        <Route path="/service" component={Service}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
