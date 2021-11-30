import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  const location = useLocation();
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
          <NavBar />
          <Container style={{marginTop: "7em"}}>
            <Route exact path="/activities" component={ActivityDashboard} />
            <Route key={location.key} path={["/create-activity", "/manage/:id"]} component={ActivityForm} />
            <Route path="/activities/:id" component={ActivityDetails} />
          </Container>
        </>
      )} />
      
    </>
  );
}

export default observer(App);
