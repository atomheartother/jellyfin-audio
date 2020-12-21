import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../store';
import {usersGetPublic} from '../../store/users/actions';
import {RouteStackParamList} from '../../router';
import {StackNavigationProp} from '@react-navigation/stack';

const mapState = ({userList: {list}}: RootState) => ({
  userList: list,
});

const mapDispatch = {
  userListGetPublic: usersGetPublic,
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
        <Text key={user.Id}>
          {user.Name} - {user.Id}
        </Text>
      ))}
    </View>
  );
};

export default connector(Login);
