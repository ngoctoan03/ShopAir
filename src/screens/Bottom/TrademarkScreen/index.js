import {Block, Header} from '@components';
import React, {useState} from 'react';
import {Text} from 'react-native';

const TrademarkScreen = () => {
  return (
    <Block flex backgroundColor="background">
      <Header title="Thương hiệu" />
      <Block row flex>
        <Text>123</Text>
      </Block>
    </Block>
  );
};

export default TrademarkScreen;
