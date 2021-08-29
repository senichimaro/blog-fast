import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'

// import Pages
import Table from './UI/Pages/Table'
import Form from './UI/Pages/Form'
import Read from './UI/Pages/Read'

// import components
import NavEl from './UI/components/NavEl'



const App = () => {

  return (
    <>
    <Router>

      <NavEl />

      <Switch>

        <Route exact path="/">
          <Table />
        </Route>

        <Route exact path="/form">
          <Form />
        </Route>

        <Route exact path="/read">
          <Read />
        </Route>

      </Switch>
    </Router>
    </>
  )
}

export default App;
