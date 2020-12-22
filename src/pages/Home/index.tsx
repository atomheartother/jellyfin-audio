import React from 'react';
import {Text, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../store';
import {RouteStackParamList} from '../../router';
import {StackNavigationProp} from '@react-navigation/stack';

const mapState = ({user: {token, session}}: RootState) => ({
  token,
  session,
});

const connector = connect(mapState);

type LoginNavigationProp = StackNavigationProp<RouteStackParamList, 'Home'>;

type ReduxProps = ConnectedProps<typeof connector>;

const Login: React.FC<
  ReduxProps & {
    navigation: LoginNavigationProp;
  }
> = ({token, session}) => {
  return (
    <View>
      <Text>Token: {token}</Text>
      {session && (
        <>
          <Text>Device ID: {session.DeviceId}</Text>
          <Text>Device Name: {session.DeviceName}</Text>
          <Text>User ID: {session.UserId}</Text>
        </>
      )}
    </View>
  );
};

export default connector(Login);
