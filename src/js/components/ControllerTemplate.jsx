import React from 'react';
import WikiStore from '../../stores/WikiStore.js'

export default React.createClass({
  _getStoreState(){
      //call store getters.

      //return state object.
      return {}
  }
  _onChange() {
    this.setState(this._getStoreState());
  },
  getInitialState() {
    return this._getStoreState();
  },
  componentDidMount() {
    WikiStore.addChangeListener(this._onChange);
  },
  componentWillUnmount() {
    WikiStore.removeChangeListener(this._onChange);
  },

  //other react life cycles

  render() {
    return (
        <div></div>
    );
  }
});
