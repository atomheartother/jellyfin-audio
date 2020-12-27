import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ServerSelect from './pages/ServerSelect';
import Login from './pages/Login';
import Home from './pages/Home';
import Library from './pages/Library';
import {navigationRef} from './RootNavigation';

export type RouteStackParamList = {
  ServerSelect: undefined;
  Login: undefined;
  Home: undefined;
  Library: undefined;
};

const Stack = createStackNavigator<RouteStackParamList>();

const RootRouter: React.FC = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator initialRouteName="ServerSelect">
      <Stack.Screen name="ServerSelect" component={ServerSelect} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Library" component={Library} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootRouter;
