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
    var items = this.props.items.map(function(item,index){
        return <p key={index} ><a href={'#/wiki/'+this.props.route.join('/')+'/'+item}>{item}</a></p>
    },this);
    return (
      <div>
        <div className="row">
            <Breadcrumb route={this.props.route}/>
          <div key="contentButtons" className="pull-right">
            <button className="btn btn-default disabled" onClick={this._editClickHandler}>
              <span className="glyphicon glyphicon-book" aria-hidden="true"></span> Add Folder
            </button>
            <button className="btn btn-default disabled" onClick={this._editClickHandler}>
              <span className="glyphicon glyphicon-file" aria-hidden="true"></span> Add Page
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
