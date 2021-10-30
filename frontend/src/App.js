import React,{Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import './App.css';

class App extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <BrowserRouter>
        <>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </>
      </BrowserRouter>
    )
  }
}

export default App;
