import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ServerSelect from './pages/ServerSelect';

const Stack = createStackNavigator();

const RootRouter: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="ServerSelect" component={ServerSelect} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootRouter;
