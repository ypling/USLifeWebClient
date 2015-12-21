import React from 'react';
import WikiStore from '../../stores/WikiStore'
import Wiki from './Wiki.jsx'

//Container - primary job is to gather information from stores and save it in their state
//            Have no props and no UI logic
export default React.createClass({
  _getStoreState(){
      //call store getters.

      //return state object.
      return {}
  },
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

  //other controller life cycles

  render() {
    return (
        <Wiki/>
    );
  }
});
