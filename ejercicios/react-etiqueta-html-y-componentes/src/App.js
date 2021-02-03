// Repositories
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


// Views
import Menu from './components/menus/menu-basic-01'
import Header from './views/header'
import Section from './views/section'




//Styles
import './assets/css/app.css';

function App() {
  return (
    <Router>
      <div>
          <Menu/>
          <Header/>
          <Section/>
      </div>
    </Router> 
  );
}

export default App;
