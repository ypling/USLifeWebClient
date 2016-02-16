import React from 'react';
import NavBar from '../Common/NavBar.jsx';
import Editor from './Editor.jsx';
import Actions from '../../actions/WikiActions';
import Breadcrumb from './Breadcrumb.jsx';
import {PageHeader} from 'react-bootstrap';
export default React.createClass({
  //react life cycles
  _editClickHandler() {
    Actions.editPage();
  },
  _deleteClickHandler() {
    Actions.deletePage(this.props.route.join('/'),this.props.currentPage.title);
  },
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <Breadcrumb route={this.props.route} activeLastOne={true}/>
            <div key="contentButtons" className="pull-right">
              <button className="btn btn-default" onClick={this._editClickHandler}>
                <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                &nbsp;Edit
              </button>
              <button className="btn btn-default" onClick={this._deleteClickHandler}>
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                &nbsp;Delete
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <PageHeader>{this.props.currentPage.title}
              <small>author info</small>
            </PageHeader>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div dangerouslySetInnerHTML={{
              __html: this.props.currentPage.content
            }}></div>
          </div>
        </div>
      </div>
    );
  }
});
