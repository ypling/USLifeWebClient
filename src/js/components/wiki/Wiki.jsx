import React from 'react';
import NavBar from '../Common/NavBar.jsx';
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
        view = <Content route={this.props.route} pageContent={this.props.pageContent}/>;
        break;
      case Constants.WikiViews.EDITOR:
        view = <Editor route={this.props.route} pageContent={this.props.pageContent}/>;
        break;
      case Constants.WikiViews.FOLDER:
        view = <Folder route={this.props.route} items={this.props.folderItems}/>;
        break;
    }
    return (
      <div className="container-fluid">
        <NavBar title="Wiki" titleHref="/wiki"/>
        {view}
      </div>
    );
  }
});
