import React from 'react';

export default React.createClass({
  //react life cycles
  render() {
    return (
      <div className="row">
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">LOGO</a>
            <a className="navbar-brand" href={'#' + this.props.titleHref}>{this.props.title}</a>
          </div>
        </nav>
      </div>
    );
  }
});
