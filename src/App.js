import logo from './logo.svg';
import './App.css';
import Navbarb from './Components/Navbarb/Navbarb';
import Home from './Components/Home/Home.js';
import {Route} from 'react-router-dom';
import MovieList from './Components/MovieList/MovieList';
import Description from './Components/Description/Description.js';

function App() {
  return (
    <div className="App">
    
     <Navbarb/>
     <Route exact path="/" component={Home}/>
     <Route exact path="/movieList/3" component={MovieList}/>
     <Route  path="/description/:id" component={Description}/>
     <Route exact  path="/movieList" component={MovieList}/>
    </div>
  );
}

export default App;
