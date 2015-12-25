import React from 'react';
import NavBar from '../Common/NavBar.jsx';
import TinyMCE from 'react-tinymce';
import Constants from '../../Constants';
import Actions from '../../actions/WikiActions';
import Breadcrumb from './Breadcrumb.jsx';

export default React.createClass({
  _editorContent: undefined,
  //react life cycles
  componentDidMount() {
    this._editorContent = this.props.pageContent;
  },
  //private
  _editorChangeHandler(event) {
    console.log(event.target.getContent());
    this._editorContent = event.target.getContent();
  },
  _saveClickHandler() {
    Actions.savePage(this._editorContent);
  },
  _cencelClickHandler() {
    Actions.cencelEdit();
  },
  render() {
    return (
      <div>
        <div className="row">
            <Breadcrumb route={this.props.route}/>
          <div key="editorButtons" className="pull-right">
            <button className="btn btn-default" onClick={this._saveClickHandler}>
              <span className="glyphicon glyphicon-save" aria-hidden="true"></span> Save
            </button>
            <button className="btn btn-default" onClick={this._cencelClickHandler}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Cencel
            </button>
          </div>
        </div>
        <div className="row">
          <TinyMCE content={this.props.pageContent} config={{
            plugins: 'autolink link image lists print preview',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright',
            min_height: Constants.EDITOR_MIN_HEIGHT
          }} onChange={this._editorChangeHandler}/>
        </div>
      </div>
    );
  }
});
