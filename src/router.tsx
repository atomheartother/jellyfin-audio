import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ServerSelect from './pages/ServerSelect';
import Login from './pages/Login';
import Home from './pages/Home';
import Library from './pages/Library';
import {navigationRef} from './RootNavigation';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from './store';

const mapState = ({session: {url, token}}: RootState) => ({
  isLoggedIn: url && token,
});

const connector = connect(mapState);

type ReduxProps = ConnectedProps<typeof connector>;

export type RouteStackParamList = {
  Splash: undefined;
  ServerSelect: undefined;
  Login: undefined;
  Home: undefined;
  Library: undefined;
};

const Stack = createStackNavigator<RouteStackParamList>();

// There is NO NAVIGATION between logged in & logged out states
// You log the user in & get taken to the home, you log the user out & get taken to server select
const RootRouter: React.FC<ReduxProps> = ({isLoggedIn}) => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator initialRouteName="ServerSelect">
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Library" component={Library} />
        </>
      ) : (
        <>
          <Stack.Screen name="ServerSelect" component={ServerSelect} />
          <Stack.Screen name="Login" component={Login} />
        </>
      )}
    </Stack.Navigator>
  </NavigationContainer>
);

export default connector(RootRouter);
