import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../Common/NavBar.jsx';
import TinyMCE from 'react-tinymce';
import Constants from '../../Constants';
import Actions from '../../actions/WikiActions';
import Breadcrumb from './Breadcrumb.jsx';
import {Input} from 'react-bootstrap';

export default React.createClass({
  _editorContent: undefined, _title: undefined, _oldTitle: undefined,
  _fileUploadCallback:undefined,
  //react life cycles
  componentWillMount() {
    if (this.props.currentPage) {
      this._editorContent = this.props.currentPage.content;
      this._title = this.props.currentPage.title;
      this._oldTitle = this.props.currentPage.title;
    }
  },
  componentWillReceiveProps(nextProps){
    if(this._fileUploadCallback!==undefined && nextProps.uploadedImageURL!==undefined){
      this._fileUploadCallback(nextProps.uploadedImageURL);
    }
  },
  //private
  _editorChangeHandler(event) {
    this._editorContent = event.target.getContent();
  },
  _titleChangeHandler(event) {
    this._title = event.target.value;
  },
  _saveClickHandler() {
    Actions.savePage(this.props.route.join('/'), this._oldTitle, {
      title: this._title,
      content: this._editorContent
    });
  },
  _cancelClickHandler() {
    Actions.cancelEdit();
  },
  _pickFileClickHandler(callback,value,mate){
    var fileInput = ReactDOM.findDOMNode(this.refs.fileInput);
    this._fileUploadCallback = callback;
    fileInput.value = '';
    fileInput.click();
  },
  _fileInputChangeHandler(event){
    var file = event.target.files[0];
    if(file){
      Actions.uploadImage(file);
    }
  },
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <Breadcrumb route={this.props.route} activeLastOne={true}/>
            <div key="editorButtons" className="pull-right">
              <button className="btn btn-default" onClick={this._saveClickHandler}>
                <span className="glyphicon glyphicon-save" aria-hidden="true"></span>
                &nbsp;Save
              </button>
              <button className="btn btn-default" onClick={this._cancelClickHandler}>
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                &nbsp;Cancel
              </button>
            </div>
          </div>
        </div>
        <form>
          <Input type="text" label="Title" placeholder="Please input a page tile." defaultValue={this._title} onChange={this._titleChangeHandler}/>
          <Input label="Content" wrapperClassName="wrapper">
            <TinyMCE content={this._editorContent} config={{
              plugins: 'autolink link image lists print preview',
              toolbar: 'undo redo | bold italic | image | alignleft aligncenter alignright',
              file_picker_callback:this._pickFileClickHandler,
              min_height: Constants.EDITOR_MIN_HEIGHT,
              image_prepend_url: "http://www.tinymce.com/images/"
            }} onChange={this._editorChangeHandler}/>
          </Input>
          <input style={{display:'none'}} ref='fileInput' type="file" id="myFile" onChange={this._fileInputChangeHandler}/>
        </form>
      </div>
    );
  }
});
