import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import { 
  MainContentWrapper as MainContent,
  LeftSiderWrapper as LeftContent,
  RightSiderWrapper as RightContent
} from './Content/Content';
import { LoginForm } from './Login/Login';
import { RegisterForm } from './Register/Register';

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route 
            exact path="/app"
            render={()=>{
              return(
                <Layout>
                  <Header />
                  <Layout>
                    <LeftContent />
                    <MainContent />
                    <RightContent />
                  </Layout>
                  <Footer />
                </Layout>
              );
            }}
          />
          <Route
            path="/login"
            render={()=>{
              return(
                <LoginForm />
              );
            }}
          />
          <Route
            path="/signin"
            render={()=>{
              return(
                <RegisterForm />
              )
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
