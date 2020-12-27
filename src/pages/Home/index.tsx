import React from 'react';
import {Text, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../store';
import {RouteStackParamList} from '../../router';
import {StackNavigationProp} from '@react-navigation/stack';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

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
        <TouchableNativeFeedback onPress={() => {}} key={library.data.Id}>
          <Text style={{fontWeight: 'bold'}}>Library #{index}:</Text>
          <Text>Name: {library.data.Name}</Text>
          <Text>Id: {library.data.Id}</Text>
        </TouchableNativeFeedback>
      ))}
    </View>
  );
};

export default connector(Login);
