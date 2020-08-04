import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import CreatePage from "./pages/create/create.page"
import HomePage from "./pages/home/home.page"

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        {/* create page */}
        <Route path="/create">
          <CreatePage />
        </Route>

        {/* home page */}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
