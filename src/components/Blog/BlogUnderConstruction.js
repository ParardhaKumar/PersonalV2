import React,{Component} from 'react';

import './BlogUnderConstruction.css';

class BlogUnderConstruction extends Component{

  render(){
    return(
      <div>
        <div className="blog-container">

            <div class="article">
              <h4 class="datestamp"> December 25 2021 </h4>
              <h2 class="heading"> Fixing a bug </h2>
              <p class="opening-para">Thank you for visiting my website.
              </p>
              <p>I am fixing a bug with the blog section of this site. Apologies for any inconvenince. Will be up very soon.
              </p>
              <hr></hr>
            </div>

        </div>
      </div>
    )
  }
}

export default BlogUnderConstruction;
