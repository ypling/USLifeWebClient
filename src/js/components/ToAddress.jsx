import React from 'react';

export default React.createClass({
  //getDefaultProps() {
  //    return {
  //        tasks: []
  //    };
  //},
  render() {
    let {title} = this.props;
    return (
      <div className="toAddress">
        {title}
      </div>
    );
  }
});
