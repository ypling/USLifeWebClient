import React from 'react';
import SDKStore from '../../stores/SDKStore.js';
import FeatureGoup from './FeatureGroup.jsx';
import Actions from '../../actions/SDKActions';
export default React.createClass({
  _getStoreState() {
    //call store getters.
    var featureGroups = SDKStore.getFeatureGroups();
    //return state object.
    return {featureGroups: featureGroups}
  },
  _onChange() {
    this.setState(this._getStoreState());
  },
  getInitialState() {
    return this._getStoreState();
  },
  componentDidMount() {
    SDKStore.addChangeListener(this._onChange);
    Actions.getFeatureGroups();
  },
  componentWillUnmount() {
    SDKStore.removeChangeListener(this._onChange);
  },
  //other react life cycles
  render() {
    return (
      <div>
        <FeatureGoup featureGroups={this.state.featureGroups}/>
      </div>
    );
  }
});
