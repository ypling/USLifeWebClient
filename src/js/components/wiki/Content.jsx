import React from 'react';
import NavBar from '../Common/NavBar.jsx';
import Editor from './Editor.jsx';
import Actions from '../../actions/WikiActions';
import Breadcrumb from './Breadcrumb.jsx';

export default React.createClass({
  //react life cycles
  _editClickHandler() {
    Actions.editPage();
  },
  render() {
    return (
      <div>
        <div className="row">
            <Breadcrumb route={this.props.route}/>
          <div key="contentButtons" className="pull-right">
            <button className="btn btn-default disabled" onClick={this._editClickHandler}>
              <span className="glyphicon glyphicon-book" aria-hidden="true"></span>
              Add Folder
            </button>
            <button className="btn btn-default disabled" onClick={this._editClickHandler}>
              <span className="glyphicon glyphicon-file" aria-hidden="true"></span>
              Add Page
            </button>
            <button className="btn btn-default" onClick={this._editClickHandler}>
              <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
              Edit
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div dangerouslySetInnerHTML={{
              __html: this.props.pageContent
            }}></div>
          </div>
        </div>
      </div>
    );
  }
});
