import React from 'react';
import {View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RouteStackParamList} from '../../router';
import {StackNavigationProp} from '@react-navigation/stack';

const mapState = () => ({});

const connector = connect(mapState);

type LibraryNavigationProp = StackNavigationProp<
  RouteStackParamList,
  'Library'
>;

type ReduxProps = ConnectedProps<typeof connector>;

const Library: React.FC<
  ReduxProps & {
    navigation: LibraryNavigationProp;
  }
> = ({}) => {
  return <View />;
};

export default connector(Library);
