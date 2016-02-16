import React from 'react';
import HomeStore from '../../stores/HomeStore.js';
import Home from './Home.jsx';
export default React.createClass({
  _getStoreState() {
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
    HomeStore.addChangeListener(this._onChange);
  },
  componentWillUnmount() {
    HomeStore.removeChangeListener(this._onChange);
  },
  //other react life cycles
  render() {
    return (<Home/>);
  }
});
