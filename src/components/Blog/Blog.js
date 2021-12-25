import React,{Component} from 'react';

import './Blog.css';

class Blog extends Component{

  render(){
    return(
      <div>
        <div className="blog-container">

            <div class="article">
              <h4 class="datestamp"> February 27 2018 </h4>
              <h2 class="heading"> This is my First Article </h2>
              <p class="opening-para">An Omniscient knowing without sight or thought,
                 An indecipherable Omnipotence,
                 A mystic Form that could contain the worlds,
                 Yet make one human breast its passionate shrine,
                 Drew him out of his seeking loneliness
                 Into the magnitudes of God’s embrace.
              </p>
              <p>There is an Omniscient, all-knowing, but it knows without seeing, without thinking; an Omnipotence whose range cannot be determined; a single Form, mystic, which cannot be analysed, which can contain all the worlds in itself and yet—this is the beauty of it—can dwell in a single human breast as its vibrant shrine. So far he has been seeking, searching and aspiring alone, but now this Omnipotence draws him out of his singleness, he is no more alone, he is held in the vast embrace of God.
              </p>
              <hr></hr>
            </div>

            <div class="article">
              <h4 class="datestamp"> February 26 2018 </h4>
              <h2 class="heading"> This is my Second Article </h2>
              <p class="opening-para">A fire that seemed the body of a god
                  Consumed the limiting figures of the past
                  And made large room for a new self to live.
              </p>
              <p>We are always haunted by images of our past, even when we shut our eyes to them, they have a way of coming up. As they appear, they hold us back, they put a clamp on us; but all those are now consumed by a fire that glows, like the body of a god—so pure, so powerful. The oppressive elements are removed, the past figures are burnt up and large room made for a new unbounded self to live.
              </p>
              <hr></hr>
            </div>

        </div>
      </div>
    )
  }
}

export default Blog;
