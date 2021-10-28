import {Block, Carousel, Header} from '@components';
import {theme} from '@theme';
import {height} from '@utils/responsive';
import React, {useRef, useState} from 'react';
import {Animated, RefreshControl} from 'react-native';
import styles from './styles';

const HomeScreens = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [refresh, setrefresh] = useState(false);
  const _onRefresh = () => {
    setTimeout(() => {
      setrefresh(true);
    }, 1000);
  };
  return (
    <Block flex backgroundColor="white">
      <Header type="Home" scroll={scrollY} />

      <Animated.ScrollView
        removeClippedSubviews
        scrollEventThrottle={16}
        contentInsetAdjustmentBehavior="never"
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        refreshControl={
          <RefreshControl
            style={styles.refreshing}
            onRefresh={() => _onRefresh}
            refreshing={refresh}
          />
        }>
        <Block
          height={60 + height}
          marginTop={-height - 60}
          backgroundColor={theme.colors.pink}
        />
        <Block paddingHorizontal={12} backgroundColor={theme.colors.pink}>
          <Carousel />
        </Block>
      </Animated.ScrollView>
    </Block>
  );
};

export default HomeScreens;
