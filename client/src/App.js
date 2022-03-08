import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
//Routing
import {PorfolioHome} from './pages'

function App() {
  return (
    <Router>

        <Switch>
            <Route exact path="/" component={PorfolioHome} />
        </Switch>

    </Router>
  );
}

export default App;
