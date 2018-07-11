import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CollectionsList from './CollectionsList';
import TasksTodo from './Taskstodo';


const CollectionsRoute = props => (
  <div>
    <Route
      exact
      path="/"
      render={routeProps => (
        <CollectionsList
          {...routeProps}
          collectionsList={props.collectionsList}
          displayTasks={props.displayTasks}
        />
      )}
    />

    <Route
      path="/c/:collection  collectionId={this.state.collectionId}Id"
      render={routeProps => (
        <CollectionsList
          {...routeProps}
          collectionsList={props.collectionsList}
          displayTasks={props.displayTasks}
        />
      )}
    />
    <TasksTodo
      handleSubmit={props.addTask}
    />

  </div>
)


export default CollectionsRoute;
