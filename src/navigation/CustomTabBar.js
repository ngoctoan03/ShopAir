import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image, Platform, Pressable, StyleSheet, View} from 'react-native';
import {Badge} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CustomTabBar = ({state, descriptors, navigation, value, ...props}) => {
  const {bottom} = useSafeAreaInsets();
  return (
    <Block
      row
      backgroundColor={theme.colors.white}
      paddingBottom={Platform.OS === 'ios' ? bottom : 10}
      paddingTop={10}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const icon =
          index === 0
            ? icons.home
            : index === 1
            ? icons.trademark
            : index === 2
            ? icons.favorite
            : index === 3
            ? icons.notification
            : icons.user;

        const iconselect =
          index === 0
            ? icons.homeselect
            : index === 1
            ? icons.trademark
            : index === 2
            ? icons.favorite_selected
            : index === 3
            ? icons.notification_selected
            : icons.user_selected;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.btn}>
            {index === 3 && (
              <Badge
                status="error"
                containerStyle={styles.containerStyle}
                badgeStyle={styles.badgeStyle}
                textProps={{allowFontScaling: false}}
                value="1"
              />
            )}
            <View>
              {/* <Shadow /> */}
              <Block alignCenter>
                <Image
                  source={isFocused ? iconselect : icon}
                  style={styles.iconstyle(isFocused)}
                />
                <Text style={styles.textlabel(isFocused)}>{label}</Text>
              </Block>
            </View>
          </Pressable>
        );
      })}
    </Block>
  );
};
export default CustomTabBar;
const styles = StyleSheet.create({
  btn: {flex: 1, alignItems: 'center'},
  textlabel: isFocused => ({
    color: isFocused ? theme.colors.black : theme.colors.lightGray,
    marginTop: 5,
    fontSize: 10,
  }),
  iconstyle: isFocused => ({
    width: getSize.s(20),
    height: getSize.s(20),
    resizeMode: 'contain',
    tintColor: isFocused ? theme.colors.black : theme.colors.lightGray,
  }),
  containerStyle: {
    position: 'absolute',
    zIndex: 10,
    top: getSize.s(-7),
    right: getSize.s(21),
  },
  badgeStyle: {borderColor: '#fff', borderWidth: 1},
});
