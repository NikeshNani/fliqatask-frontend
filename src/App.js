import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CreateProperty from './components/CreateProperty'
import ListProperties from './components/ListProperties'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CreateProperty} />
        <Route path="/list-properties" component={ListProperties} />
      </Switch>
    </BrowserRouter>
  );
}

export default App
