// Repositories
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


// Views
import Header from './views/header'


//Styles
import './assets/css/app.css';

function App() {
  return (
    <Router>
      <div>
        <menu/>
          <Header/>
      </div>
    </Router> 
  );
}

export default App;
