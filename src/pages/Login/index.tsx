import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../store';
import {userListGetPublic} from '../../store/userList/actions';
import {RouteStackParamList} from '../../router';
import {StackNavigationProp} from '@react-navigation/stack';

const mapState = ({userList}: RootState) => ({
  userList,
});

const mapDispatch = {
  userListGetPublic,
};

const connector = connect(mapState, mapDispatch);

type LoginNavigationProp = StackNavigationProp<RouteStackParamList, 'Login'>;

type ReduxProps = ConnectedProps<typeof connector>;

const Login: React.FC<
  ReduxProps & {
    navigation: LoginNavigationProp;
  }
> = ({userList, userListGetPublic: getUsersPublic}) => {
  useEffect(() => {
    getUsersPublic();
  }, [getUsersPublic]);
  return (
    <View>
      {Object.values(userList).map((user) => (
        <Text key={user.ServerId}>
          {user.Name} - {user.ServerId}
        </Text>
      ))}
    </View>
  );
};

export default connector(Login);
