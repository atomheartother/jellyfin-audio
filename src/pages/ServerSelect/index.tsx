import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../store';
import {setServerUrl} from '../../store/user/actions';
import {usersGetPublic} from '../../store/users/actions';

const mapState = ({user: {url}, userList: {error}}: RootState) => ({
  url,
  userListError: error,
});

const mapDispatch = {
  setServerUrl,
  usersGetPublic,
};

const connector = connect(mapState, mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>;

const ServerSelect: React.FC<ReduxProps> = ({
  url,
  setServerUrl: setUrl,
  usersGetPublic: getPublicUsers,
  userListError,
}) => {
  const [localUrl, setLocalUrl] = useState(url);
  const submitUrl = (): void => {
    setUrl(localUrl);
    getPublicUsers();
  };
  return (
    <View style={{flex: 1}}>
      <TextInput
        style={{backgroundColor: 'white'}}
        onChangeText={setLocalUrl}
        value={localUrl}
        placeholder="https://jellyfin.myserver.net"
      />
      <Button onPress={submitUrl} title="Set URL" />
      {userListError && <Text>{userListError.message}</Text>}
    </View>
  );
};

export default connector(ServerSelect);
