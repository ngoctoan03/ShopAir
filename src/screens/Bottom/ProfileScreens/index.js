import {Block} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const ProfileScreens = () => {
  return (
    <Block flex backgroundColor={theme.colors.white}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block alignCenter>
          <Text>12321</Text>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default ProfileScreens;
