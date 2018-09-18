import React, { Component } from 'react';

class Tour extends Component {
  
  render() { 
    return ( 
      <div className="tourtile">
        <img src="http://www.worldwidewalrusweb.com/bc2/europe_2.jpg" />
        <h2 className="tourhead">Secret Walking Tour</h2>
        <p className="tour-tile-text">Here is the description of this tour. It is super cool, you should really check it out</p>
        <i className="far fa-star"></i>
      </div>

    );
  }
}
 
export default Tour;