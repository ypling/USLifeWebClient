import React from 'react';
import {Link} from 'react-router'
export default React.createClass({
  //react life cycles
  _WikiClickHandler(){

  },
  render() {
    return (
        <div>
          <Link to="/wiki">
            <button>Wiki</button>
          </Link>
          <Link to="/sdk">
            <button>SDK</button>
          </Link>
          <Link to="/home">
            <button>Home</button>
          </Link>
        </div>
    );
  }
});
