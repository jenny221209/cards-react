// Views
import ViewsButtons from './views/ViewsButtons'
import ViewsFlexContainer from './views/ViewsFlexContainer'
import ViewsTypografia from './views/ViewsTypografia'

//Styles
import './assets/css/app.css';

function App() {
  return (
    <div>
        <ViewsFlexContainer />
        <ViewsButtons/>
        <ViewsTypografia/>

    </div>
  );
}

export default App;
