import React,{Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import BlogUnderConstruction from './components/Blog/BlogUnderConstruction';
import NotFound from './components/NotFound/NotFound';
import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

library.add(fab, faCheckSquare, faCoffee);

class App extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/blog" component={BlogUnderConstruction} exact />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
