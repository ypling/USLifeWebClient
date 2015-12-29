import React from 'react';
import WikiStore from '../../stores/WikiStore';
import Wiki from './Wiki.jsx';
import Actions from '../../actions/WikiActions';

//Container - primary job is to gather information from stores and save it in their state
//            Have no props and no UI logic
export default React.createClass({
  _getStoreState() {
    //call store getters.
    var currentPage = WikiStore.getCurrentPage();
    var currentView = WikiStore.getCurrentView();
    var folderItems = WikiStore.getFolderItems();
    var route = WikiStore.getRoute();
    //return state object.
    return {currentPage: currentPage, currentView: currentView, folderItems: folderItems, route: route};
  },
  _onChange() {
    this.setState(this._getStoreState());
  },
  getInitialState() {
    return this._getStoreState();
  },
  componentDidMount() {
    WikiStore.addChangeListener(this._onChange);
    //handle routing
    Actions.routing(this.props.params.splat);
  },
  componentWillUnmount() {
    WikiStore.removeChangeListener(this._onChange);
  },
  //handle routing
  componentWillReceiveProps(nextProps) {
    Actions.routing(nextProps.params.splat);
  },

  //other controller life cycles

  render() {
    return (<Wiki currentPage={this.state.currentPage} view={this.state.currentView} folderItems={this.state.folderItems} route={this.state.route}/>);
  }
});
