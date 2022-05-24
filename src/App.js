import logo from './logo.svg';
import './App.css';
import CompA from './Componentss/CompA';
import CompC from './Componentss/CompC';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Lisst from './Listrendering/Lisst'
import Lisst2 from './Listrendering/Lisst2'
function App() {
  return (
    <div className="App">
     <h2>Hello</h2>
     <CompA/>
     <CompC/>
     <Comp1/>
     <Comp2/>
    <Lisst/>
    <Lisst2/>
    </div>
  );
}

export default App;
