import React from 'react';

export default React.createClass({
  //react life cycles
  render() {
    if(this.props.featureGroups){
      var featureGroupList = this.props.featureGroups.map(function(item,index){
        return (<p key={index}>{item.feature_name}</p>);
      });
    }
    return (
        <div>
        <h1>Feature Groups</h1>
          {featureGroupList}
        </div>
    );
  }
});
