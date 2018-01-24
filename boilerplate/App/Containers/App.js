import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import stores from '../MobX'
import RootContainer from './RootContainer'

class App extends Component {
  render () {
    return (
      <Provider {...stores}>
        <RootContainer />
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
