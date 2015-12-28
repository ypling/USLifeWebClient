import React from 'react';
import NavBar from '../Common/NavBar.jsx';
import Editor from './Editor.jsx';
import Actions from '../../actions/WikiActions';
import Breadcrumb from './Breadcrumb.jsx';
import Constants from '../../Constants';

export default React.createClass({
  //react life cycles
  _editClickHandler() {
    Actions.editPage();
  },
  _itemClickHandler(item) {
    if (item.type === Constants.WikiItemType.FILE) {
      Actions.selectPage(this.props.route.join('/') + '/' + item.path);
    } else {
      location.hash = 'wiki/' + this.props.route.join('/') + '/' + item.path;
    }
  },
  _createFolderClickHandler(){
    var folderName = prompt('create folder','please enter a folder name');
    if(folderName){
      Actions.createFolder(this.props.route.join('/')+'/'+folderName);
    }
  },
  render() {
    var items = this.props.items.map(function(item, index) {
      var icon = (item.type === Constants.WikiItemType.FOLDER)
        ? 'glyphicon glyphicon-folder-close'
        : 'glyphicon glyphicon-file';
      return (
        <div key={this.props.route.join('/') + item.path}>
          <a onClick={this._itemClickHandler.bind(this, item)}>
            <span className={icon}></span>{item.path}</a>
        </div>
      );
    }, this);
    return (
      <div>
        <div className="row">
          <Breadcrumb route={this.props.route} activeLastOne={false}/>
          <div key="contentButtons" className="pull-right">
            <button className="btn btn-default" onClick={this._createFolderClickHandler}>
              <span className="glyphicon glyphicon-book" aria-hidden="true"></span>
              Create Folder
            </button>
            <button className="btn btn-default" onClick={this._editClickHandler}>
              <span className="glyphicon glyphicon-file" aria-hidden="true"></span>
              Add Page
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            {items}
          </div>
        </div>
      </div>
    );
  }
});
