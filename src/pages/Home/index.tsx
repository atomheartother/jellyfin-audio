import React from 'react';
import {Text, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../store';
import {RouteStackParamList} from '../../router';
import {StackNavigationProp} from '@react-navigation/stack';

const mapState = ({session: {token, session}, libraries}: RootState) => ({
  token,
  session,
  libraries,
});

const connector = connect(mapState);

type LoginNavigationProp = StackNavigationProp<RouteStackParamList, 'Home'>;

type ReduxProps = ConnectedProps<typeof connector>;

const Login: React.FC<
  ReduxProps & {
    navigation: LoginNavigationProp;
  }
> = ({token, session, libraries}) => {
  return (
    <View>
      <Text>Token: {token}</Text>
      {session && (
        <>
          <Text>Device ID: {session.DeviceId}</Text>
          <Text>Device Name: {session.DeviceName}</Text>
          <Text>User ID: {session.UserId}</Text>
          <Text>Username: {session.UserName}</Text>
        </>
      )}
      {Object.values(libraries).map((library, index) => (
        <View key={library.Id}>
          <Text>Library {index}:</Text>
          <Text>Name: {library.Name}</Text>
          <Text>Id: {library.Id}</Text>
        </View>
      ))}
    </View>
  );
};

export default connector(Login);
