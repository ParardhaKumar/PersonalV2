import React,{Component} from 'react';

import { title, blog } from './BlogContent';
import './Blog.css';

class Blog extends Component{

  render(){
    const { match: {params} } = this.props;
    const blogTitle = params.title;
    if (title[blogTitle] == undefined) {
      return(<div>{this.props.history.push({pathname: "/NotFound"})}</div>);
    }
    else{
      const blogId = title[blogTitle];
      return(
        <div className="container">
          <div className="blog-container">

              <div className="article">
                <h4 className="datestamp"> { blog[blogId].date } </h4>
                <h2 className="heading"> { blog[blogId].title }</h2>

                <p className="opening-para"> { blog[blogId].abstract } </p>

                { blog[blogId].paragraphs.map(paragraph => <p> {paragraph} </p> ) }

                <hr></hr>
              </div>

          </div>
        </div>
      )
    }
  }
}

export default Blog;
