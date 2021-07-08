import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Clock from './Clock';
import MagicButton from './MagicButton';
import MagicTable from './MagicTable';
import CurrencyCalculator from './CurrencyCalculator';

function App() {
  return (
   <Router>
     <Route path="/" component={Clock}/>
     <Route path="/MagicButton" component={MagicButton}/>
     <Route path="/MagicTable" component={MagicTable}/>
     <Route path="/CurrencyCalculator" component={CurrencyCalculator}/>
   </Router>
  );
}

export default App;
