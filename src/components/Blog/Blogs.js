import React, { Component } from 'react';

import './Blogs.css';

class Blogs extends Component {

  goToBlog = () => {
    console.log("Clicked!")
    this.props.history.push({pathname: "/blog/randomBlogId"});
  }

  render(){
    return(
      <div className="container">
        <div className="page-header"><h1>Blogs by Parardha</h1></div>
        <hr></hr>
        <div className="blogs-container">
          <div className="blog">
            <div className="blog-content">
              <div className="image">
              <img className="blog-image" src="random.jpeg" alt="Blog Image"></img>
              </div>
              <div className="text">
                <div className="blog-title"><span onClick={this.goToBlog}>Blog Title</span></div>
                <div><hr></hr></div>
                <div className="search-criteria">
                  <div className="date">23rd June, 2021</div>
                  <div className="tags">Technology</div>
                </div>
                <div className="abstract">
                The abstract of the blog goes here.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Blogs;
