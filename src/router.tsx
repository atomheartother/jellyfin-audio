import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ServerSelect from './pages/ServerSelect';
import Login from './pages/Login';
import {navigationRef} from './RootNavigation';

export type RouteStackParamList = {
  ServerSelect: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<RouteStackParamList>();

const RootRouter: React.FC = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator initialRouteName="ServerSelect">
      <Stack.Screen name="ServerSelect" component={ServerSelect} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootRouter;
