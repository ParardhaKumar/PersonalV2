import React,{Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import './App.css';

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
            <Route path="/blog" component={Blog} exact />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
