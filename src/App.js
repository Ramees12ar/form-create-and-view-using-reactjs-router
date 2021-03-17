import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './component/home';
import Data from './component/data';
import View from './component/detail';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li> 
				      <Link to="/data">User</Link> 
			    </li> 
			    <li> 
				      <Link to="/view">Details</Link> 
			    </li> 
			  </ul> 
			  <Switch> 
			      <Route exact path='/' component={Home}></Route> 
            <Route exact path='/data' component={Data}></Route> 
            <Route exact path='/view' component={View}></Route> 
			  </Switch> 
      </div>
    </Router>
  );
}

export default App;
