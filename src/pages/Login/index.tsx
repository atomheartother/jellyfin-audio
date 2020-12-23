import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../store';
import {usersGetPublic, login} from '../../store/users/actions';
import {RouteStackParamList} from '../../router';
import {StackNavigationProp} from '@react-navigation/stack';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

const mapState = ({users: {list}}: RootState) => ({
  users: list,
});

const mapDispatch = {
  usersGetPublic,
  login,
};

const connector = connect(mapState, mapDispatch);

type LoginNavigationProp = StackNavigationProp<RouteStackParamList, 'Login'>;

type ReduxProps = ConnectedProps<typeof connector>;

const Login: React.FC<
  ReduxProps & {
    navigation: LoginNavigationProp;
  }
> = ({users, usersGetPublic: getUsersPublic, login: dispatchLogin}) => {
  useEffect(() => {
    getUsersPublic();
  }, [getUsersPublic]);
  return (
    <View>
      {Object.values(users).map((user) => (
        <TouchableNativeFeedback
          key={user.Id}
          onPress={() => {
            dispatchLogin(user.Name, '');
          }}>
          <Text>
            {user.Name} - {user.Id}
          </Text>
        </TouchableNativeFeedback>
      ))}
    </View>
  );
};

export default connector(Login);
