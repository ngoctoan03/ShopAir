import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from './routes';
import {bottom} from '../screens/Bottom';
import CustomTabBar from './CustomTabBar';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name={routes.HOME_SCREEN}
        component={bottom.HOMESCREEN}
        options={{
          tabBarLabel: 'Trang chủ',
        }}
      />
      <Tab.Screen
        name={routes.TRADEMARK_SCREEN}
        component={bottom.TRADEMARKSCREEN}
        options={{
          tabBarLabel: 'Danh mục',
        }}
      />
      <Tab.Screen
        name={routes.NOTIFICATION_SCREEN}
        component={bottom.NOTIFICATIONSCREEN}
        options={{
          tabBarLabel: 'Thông báo',
        }}
      />
      <Tab.Screen
        name={routes.USER_SCREEN}
        component={bottom.PROFILESCREEN}
        options={{
          tabBarLabel: 'Tài khoản',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
