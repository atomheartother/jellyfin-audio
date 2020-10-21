import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../store';
import {setServerUrl} from '../../store/user/actions';

const mapState = ({user: {url, token}}: RootState) => ({
  url,
  token,
});

const mapDispatch = {
  setServerUrl,
};

const connector = connect(mapState, mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>;

const ServerSelect: React.FC<ReduxProps> = ({
  url,
  setServerUrl: setUrl,
  token,
}) => {
  const [localUrl, setLocalUrl] = useState(url);
  return (
    <View style={{flex: 1}}>
      <TextInput
        style={{backgroundColor: 'white'}}
        onChangeText={setLocalUrl}
        value={localUrl}
        placeholder="https://jellyfin.myserver.net"
      />
      <Button onPress={() => setUrl(localUrl)} title="Set URL" />
      {!!token && <Text>Your token is: {token}</Text>}
    </View>
  );
};

export default connector(ServerSelect);
