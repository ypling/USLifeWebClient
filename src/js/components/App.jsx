import React, {PropTypes} from 'react';
import TaskList from './TaskList.jsx';
import ToAddress from './ToAddress.jsx';

export default React.createClass({
  propTypes: {
    tasks: PropTypes.array.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      tasks: []
    }
  },

  render() {
    let {onAddTask, onClear, tasks,targetIndex} = this.props;
    let target=targetIndex===-1?"null":tasks[targetIndex].title;
    return (
      <div>
        <div className="addressList">
          <h1>Envelop Printer</h1>
          <TaskList tasks={tasks}/>
          <button onClick={onAddTask}>Add New</button>
          <button onClick={onClear}>Clear List</button>
        </div>
        <ToAddress title={target}/>
      </div>
    );
  }
});
