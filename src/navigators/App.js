import { createStackNavigator, createAppContainer } from 'react-navigation';

// import { connect } from 'react-redux';
// import {
//   createReactNavigationReduxMiddleware,
//   reduxifyNavigator,
// } from 'react-navigation-redux-helpers';
import { Login, Home } from '../screens/';
// import { CustomBack } from '../components/';

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
// const middleware = createReactNavigationReduxMiddleware(
//   'root',
//   state => state.nav,
// );

// The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route.
const RouteConfigs = {
  Login: {
    screen: Login,
    // navigationOptions: {
    //   header: null,
    // },
  },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Home',
    }),
  },
};
const StackNavigatorConfig = {
  //Sets the default screen of the stack. Must match one of the keys in route configs.
  // initialRouteName: SCREENS.LAUNCH,
  // initialRouteName: SCREENS.REGISTER,

  //Specifies how the header should be rendered:
  // float - Render a single header that stays at the top and animates as screens are changed. This is a common pattern on iOS.
  // screen - Each screen has a header attached to it and the header fades in and out together with the screen. This is a common pattern on Android.
  // none - No header will be rendered.
  // headerMode: 'none',
  // mode: 'modal',
  navigationOptions: {
    gesturesEnabled: false,
    headerTitleStyle: {},
    headerStyle: {},
  },
};

const AppNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);
export default createAppContainer(AppNavigator);

// const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

// const mapStateToProps = state => ({
//   state: state.nav,
// });

// const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

// export { RootNavigator, AppNavigator, middleware };
