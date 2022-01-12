import React, { Component } from 'react';

import { title, blog } from './BlogContent';
import './Blogs.css';

class Blogs extends Component {

  goToBlog = (title) => {
    this.props.history.push({pathname: "/blog/" + title});
  }

  render(){
    return(
      <div className="container">
        <div className="page-header"><h1>Blogs by Parardha</h1></div>
        <hr></hr>
        <div className="blogs-container">
          {blog.map(blogItem =>
            <div className="blog">
              <div className="blog-content">
                <div className="image">
                <img className="blog-image" src={blogItem.image} alt="Blog Image"></img>
                </div>
                <div className="text">
                  <div className="blog-title"><span onClick={() => this.goToBlog(blogItem.title)}>{blogItem.title}</span></div>
                  <div><hr></hr></div>
                  <div className="search-criteria">
                    <div className="date">{blogItem.date}</div>
                    {(blogItem.tags).map(tag => <div className="tags">{tag}</div>)}
                  </div>
                  <div className="abstract">
                  {blogItem.abstract}
                  </div>
                </div>
              </div>
            </div>
          )
          }

        </div>

      </div>
    );
  }
}

export default Blogs;
