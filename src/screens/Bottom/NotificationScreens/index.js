import {Block, Header} from '@components';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList, View, Text} from 'react-native';
import ItemNotification from '@components/Common/ItemList/ItemNotification';
import {theme} from '@theme';

const NotificationScreens = () => {
  return (
    <Block flex backgroundColor={theme.colors.white}>
      <Header title="Thông báo" />
      <View>
        <Text>123</Text>
      </View>
    </Block>
  );
};

export default NotificationScreens;
