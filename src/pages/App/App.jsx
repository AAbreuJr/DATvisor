import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
// import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Landing from '../Landing/Landing'
import Index from '../IndexPage/IndexPage'
import authService from "../../services/authService";
import Users from "../Users/Users";
import "./App.css";


class App extends Component {
  state = {
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  render() {
    const {user} = this.state
    return (
      <>
        {/* <NavBar user={user} handleLogout={this.handleLogout} /> */}
        <Route
          exact
          path="/"
          render={({history}) => (
            <main>
              <Landing />
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() => (user ? <Users /> : <Redirect to="/login" />)}
        />
        <Route 
        exact
        path="/index"
        render={() => 
        <Index /> } />
      </>
    );
  }
}

export default App;

