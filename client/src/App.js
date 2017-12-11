import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'
import routes from '~/routes'

import Menu from '~/components/Menu'

import './styles/main.css'

class App extends React.Component {
  render () {
    return (
      <div>
        <Menu
          list={
            [{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }]
          }
        />
        <Switch>
          {routes.map((route, key) => (
            <Route
              key={key}
              {...route}
            />
          ))}
          <Redirect from="*" to="/"/>
        </Switch>
      </div>
    )
  }
}

export default App
