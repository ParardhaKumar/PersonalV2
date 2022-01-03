import React,{Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import BlogUnderConstruction from './components/Blog/BlogUnderConstruction';
import Blog from './components/Blog/Blog';
import Blogs from './components/Blog/Blogs';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import './App.css';

class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/blog" component={Blogs} exact />
            <Route path="/blog/randomBlogId" component={Blog} exact />
            <Route path="/contact" component={Contact} exact />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
