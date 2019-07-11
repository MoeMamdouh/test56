import React from 'react';
import { AppState, YellowBox, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AppNavigator } from './navigators/App';
import { initMixPanelSdk, rateApp, getRatingState } from './services';

import {
  RATING_APP_TIMEOUT,
  mixpanelEvents,
  COLORS,
  IS_ANDROID,
} from './constants';
import { isDateGreaterThan } from './utils';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module']);
import { Sentry } from 'react-native-sentry';

if (!__DEV__)
  Sentry.config(
    'https://ac17ed60d8b74a879c6fc34ffa86b3bc@sentry.io/1282227',
  ).install();

// apearing rate alert time out
const rateTimeOut = setTimeout(async () => {
  const storedRateState = await getRatingState();
  if (
    storedRateState &&
    storedRateState.ratingState == mixpanelEvents.RATING_LATER
  ) {
    if (
      isDateGreaterThan(
        storedRateState.date,
        7 * storedRateState.laterClickCounts,
        'days',
      )
    ) {
      if (!__DEV__) rateApp();
    }
  } else {
    if (!__DEV__) rateApp();
  }
}, RATING_APP_TIMEOUT);

class App extends React.Component {
  componentWillMount() {
    initMixPanelSdk();
  }

  componentDidMount() {
    StatusBar.setBarStyle('light-content');
    IS_ANDROID ? StatusBar.setBackgroundColor(COLORS.statusbar_bluish) : null;
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = nextAppState => {
    //if app go to background or inactive clear time out
    if (!__DEV__ && nextAppState.match(/inactive|background/))
      clearTimeout(rateTimeOut);
  };

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
