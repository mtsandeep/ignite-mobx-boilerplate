import { action, observable } from 'mobx'

import Navigation from '../Navigation/AppNavigation'

class NavigationStore {
  @observable.ref navigationState = {
    index: 0,
    routes: [
      { key: 'LaunchScreen', routeName: 'LaunchScreen' }
    ]
  }

  @action dispatch = (action, stackNavState = true) => {
    const previousNavState = stackNavState ? this.navigationState : null
    return (this.navigationState = Navigation
        .router
        .getStateForAction(action, previousNavState))
  }
}

export default new NavigationStore()
