import LayoutController from 'common/components/LayoutController';
import { linkgen, Paths } from 'common/helpers/pathing';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Logout from 'pages/Logout';
import ProjectRegister from 'pages/ProjectRegistration';
import ProjectPage from 'pages/ProjectPage';
import Projects from 'pages/Projects';
import Signup from 'pages/Signup';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const AppRouter = () => (
  <BrowserRouter>
    <LayoutController>
      <Switch>
        <Route exact path={linkgen(Paths.home)} component={Home} />
        <Route path={linkgen(Paths.login)} component={Login} />
        <Route path={linkgen(Paths.signup)} component={Signup} />
        <Route exact path="/projectregistration" component={ProjectRegister} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={ProjectPage} />
        <Route path={linkgen(Paths.logout)} component={Logout} />
      </Switch>
    </LayoutController>
  </BrowserRouter>
);

export default AppRouter;

