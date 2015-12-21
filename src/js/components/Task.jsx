import React from 'react';
import EnvelopeActions from '../actions/EnvelopeActions';

export default React.createClass({
  //getDefaultProps() {
  //  return {
  //    task: {
  //      title: '',
  //      completed: false,
  //      createTime:'12313'
  //    }
  //  };
  //},

  handleToggle(e) {
    EnvelopeActions.completeTask(this.props.task);
  },
  handleEditTask(e){
    EnvelopeActions.editTask(this.props.task, this.refs.input.value)
  },
  handleEditState(e){
    EnvelopeActions.taskState(this.props.task);
  },
  handlePrintTask(){
    EnvelopeActions.printTask(this.props.task);
  },

  render() {
    let {task} = this.props;
    if (task.editing) {
      return (
        <li className="task">
          <input type="text" ref="input" value={task.title} onChange={this.handleEditTask}
                 onSubmit={this.handleEditState}/>
          <button onClick={this.handleEditState}>Save</button>
        </li>
      );
    } else {
      return (
        <li className="task" onDoubleClick={this.handleEditState}>
          <input type="checkbox" ref="checkbox" checked={task.completed} onClick={this.handleToggle}/>
          <label>{task.title}</label>
          <button onClick={this.handleEditState}>Edit</button>
          <button onClick={this.handlePrintTask}>Print</button>
        </li>
      );
    }
  }
});
