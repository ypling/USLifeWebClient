import React from 'react';
import {
  Button,
  Navbar,
  NavItem,
  Nav,
  MenuItem,
  NavDropdown
} from 'react-bootstrap';
import Actions from '../../actions/UserActions';
export default React.createClass({
  loginClickHandler() {
    Actions.openLogin();
  },
  //react life cycles
  render() {
    var navigationData = [
      {
        name: "新生指南",
        dropDown: [
          {
            name: '学校简介'
          }, {
            name: '专业介绍'
          }, {
            name: '学费&生活费'
          }, {
            name: '周边环境'
          }, {
            name: '就业状况'
          }, {
            name: '接机帮'
          }
        ]
      }, {
        name: '日常生活',
        dropDown: [
          {
            name: '学生会通知'
          }, {
            name: '近期活动'
          }
        ]
      }, {
        name: '毕业指南',
        dropDown: [
          {
            name: 'SSN'
          }, {
            name: 'CPT'
          }, {
            name: 'OPT'
          }, {
            name: 'H1B'
          }, {
            name: 'Green Card'
          }, {
            name: 'Job Fair'
          }
        ]
      }
    ]
    var marginDiv = this.props.needMargin
      ? <div style={{
          height: "60px"
        }}></div>
      : null;
    return (
      <div>
        <Navbar fixedTop={this.props.needMargin}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">LOGO</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href={'#' + this.props.titleHref}>{this.props.title}</NavItem>
            {navigationData.map((item,index) => {
              return (
                <NavDropdown eventKey={index} title={item.name} id={"nav-dropdown"+index}>
                  {item.dropDown.map((dropDownItem,dropDownIndex)=>{
                    return (
                      <MenuItem eventKey={index+'.'+dropDownIndex}>{dropDownItem.name}</MenuItem>
                    )
                  })}
                </NavDropdown>
              )
            })}
          </Nav>
          <Navbar.Form pullRight>
            <Button onClick={this.loginClickHandler} bsStyle="success">Log in</Button>
          </Navbar.Form>
        </Navbar>
        {marginDiv}
      </div>
    );
  }
});
