import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import Loading from '../../../app/layout/Loading';
import { useStore } from '../../../app/stores/store';
import ActivityList from './ActivityList';

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities();
    }, [activityRegistry.size, loadActivities]);
  
    
    if (activityStore.loadingInitial) return <Loading content="Loading app" />

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList 
                />
            </Grid.Column>
            <Grid.Column width="6">
                <h2>Activity filters</h2>
            </Grid.Column>
        </Grid>
    )
});