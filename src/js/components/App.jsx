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
            <button onClick={this._WikiClickHandler}>Wiki</button>
          </Link>
        </div>
    );
  }
});
