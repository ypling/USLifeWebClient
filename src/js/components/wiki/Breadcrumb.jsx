import React from 'react';

export default React.createClass({
  //react life cycles
  render() {
    var _link = "";
    var listItems = this.props.route.map(function(item, index, arr) {
      _link += '/' + item;
      if (arr.length !== index + 1) {
        return (<li key={index}>
          <a href={'#/wiki' + _link}>{item}</a>
        </li>);
      } else {
        //currentOne make it not click able
        return (<li key={index} className="active">{item}</li>);
      }
    });
    return (
      <div className="pull-left">
        <ol className="breadcrumb">
          {listItems}
        </ol>
      </div>
    );
  }
});
