import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import Stores from '../Stores'
import RootContainer from './RootContainer'

class App extends Component {
  render () {
    return (
      <Provider {...Stores}>
        <RootContainer />
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
