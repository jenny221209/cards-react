
// Repositories
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// Views
import ViewsFlexContainer from './views/ViewsFlexContainer'
import ViewsGridContainer from './views/ViewsGridContainer'
import ViewsButtons from './views/ViewsButtons'
import ViewsTypografia from './views/ViewsTypografia'
import ViewsMenus from './views/ViewsMenus'





//Styles
import './assets/css/app.css';

function App() {
  return (
    <Router>
      <div>
        <ViewsMenus/>
        <ViewsFlexContainer />
        <ViewsGridContainer />
        <ViewsButtons/>
        <ViewsTypografia/>

      </div>
    </Router> 
  );
}

export default App;
