import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../store';
import {setServerUrl} from '../../store/user/actions';
import {RouteStackParamList} from '../../router';
import {StackNavigationProp} from '@react-navigation/stack';

const mapState = ({user: {url}}: RootState) => ({
  url,
});

const mapDispatch = {
  setServerUrl,
};

const connector = connect(mapState, mapDispatch);

type ServerSelectNavigationProp = StackNavigationProp<
  RouteStackParamList,
  'ServerSelect'
>;

type ReduxProps = ConnectedProps<typeof connector>;

const ServerSelect: React.FC<
  ReduxProps & {
    navigation: ServerSelectNavigationProp;
  }
> = ({url, setServerUrl: setUrl, navigation}) => {
  const [localUrl, setLocalUrl] = useState(url);
  const submitUrl = (): void => {
    setUrl(localUrl);
    navigation.navigate('Login');
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
    </View>
  );
};

export default connector(ServerSelect);
