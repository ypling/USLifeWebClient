import React from 'react';
import NavBar from '../Common/NavBar.jsx';
import TinyMCE from 'react-tinymce';
import Constants from '../../Constants';
import Actions from '../../actions/WikiActions';
import Breadcrumb from './Breadcrumb.jsx';
import {Input} from 'react-bootstrap';

export default React.createClass({
  _editorContent: undefined,
  //react life cycles
  componentDidMount() {
    this._editorContent = this.props.currentPage.content;
  },
  //private
  _editorChangeHandler(event) {
    console.log(event.target.getContent());
    this._editorContent = event.target.getContent();
  },
  _saveClickHandler() {
    Actions.savePage(this.props.route.join('/'), {
      title: 'pageNew',
      content: this._editorContent
    });
  },
  _cencelClickHandler() {
    Actions.cencelEdit();
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
              <button className="btn btn-default" onClick={this._cencelClickHandler}>
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                &nbsp;Cencel
              </button>
            </div>
          </div>
        </div>
        <form>
          <Input type="text" label="Title" placeholder="Please input a page tile." defaultValue={this.props.currentPage.title}/>
          <Input label="Content" wrapperClassName="wrapper">
            <TinyMCE content={this.props.currentPage.content} config={{
              plugins: 'autolink link image lists print preview',
              toolbar: 'undo redo | bold italic | alignleft aligncenter alignright',
              min_height: Constants.EDITOR_MIN_HEIGHT
            }} onChange={this._editorChangeHandler}/>
          </Input>
        </form>
      </div>
    );
  }
});
