import React from 'react';
import Navigation from '../Common/Navigation.jsx';
import LoginModal from '../Common/LoginModal.jsx';
import Editor from './Editor.jsx';
import Content from './Content.jsx';
import Folder from './Folder.jsx';
import Constants from '../../Constants';
export default React.createClass({
  //react life cycles
  render() {
    var view;
    switch (this.props.view) {
      case Constants.WikiViews.CONTENT:
        view = <Content route={this.props.route} currentPage={this.props.currentPage}/>;
        break;
      case Constants.WikiViews.EDITOR:
        view = <Editor route={this.props.route} currentPage={this.props.currentPage} uploadedImageURL={this.props.uploadedImageURL}/>;
        break;
      case Constants.WikiViews.FOLDER:
        view = <Folder route={this.props.route} items={this.props.folderItems}/>;
        break;
      default:
        view = null;
        break;
    }
    return (
      <div className="container-fluid">
        <Navigation title="Wiki" titleHref="/wiki" needMargin={true}/>
        <LoginModal show={this.props.showLogin}/>
        {view}
      </div>
    );
  }
});
