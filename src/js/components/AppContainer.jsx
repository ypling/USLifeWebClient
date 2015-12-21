import React from 'react';
import EnvelopeStore from '../stores/EnvelopeStore';
import EnvelopeActions from '../actions/EnvelopeActions';
import App from './App.jsx';
import RouteTest from './RouteTest.jsx'
import { Router, Route } from 'react-router'

let _clickPrint;

export default React.createClass({
  _onChange() {
    _clickPrint=this.state.clickPrintAt!==EnvelopeStore.getAll().clickPrintAt;
    this.setState(EnvelopeStore.getAll());
  },
  getInitialState() {
    return EnvelopeStore.getAll();
  },

  componentDidMount() {
    EnvelopeStore.addChangeListener(this._onChange);
  },
  componentDidUpdate(){
    if (_clickPrint) {
      window.print();
    }
  },
  componentWillUnmount() {
    EnvelopeStore.removeChangeListener(this._onChange);
  },

  handleAddTask(e) {
    let title = prompt('Enter task title:');
    if (title) {
      EnvelopeActions.addItem(title);
    }
  },

  handleClear(e) {
    EnvelopeActions.clearList();
  },

  render() {
    let {tasks,targetIndex} = this.state;
    return (
      <Router>
        <Route path="/test/:data" component={RouteTest}/>
      <App
        className="addressList"
        onAddTask={this.handleAddTask}
        onClear={this.handleClear}
        tasks={tasks}
        targetIndex={targetIndex}/>
      </Router>
    );
  }
});
