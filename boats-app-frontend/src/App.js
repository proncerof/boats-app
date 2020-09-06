import React from 'react';
import './App.css';
import 'react-notifications/lib/notifications.css';
import 'semantic-ui-css/semantic.min.css';
import { NotificationContainer } from 'react-notifications';
import { Route, Switch, Redirect } from 'react-router'; // react-router v4/v5
import LoginPage from './pages/login-page';
import MainPage from './pages/main-page';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <MainPage />
        <Redirect to="/boats" />
      </Switch>
      <NotificationContainer />
    </div>
  );
}

export default App;
