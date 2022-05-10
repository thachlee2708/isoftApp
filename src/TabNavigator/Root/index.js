import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {AppIcon} from '../../assets/icons';
import AppImageSvg from '../../components/AppImageSvg';
import {colors, fontFamily, screenName} from '../../constants';
import {pxScale} from '../../Helpers';
import Account from '../../Screens/Tabs/RootTab/Account';
import Home from '../../Screens/Tabs/RootTab/Home';
import More from '../../Screens/Tabs/RootTab/More';
import {TabBar} from 'react-native-tab-view';
import styles from './styles';
const Tab = createMaterialTopTabNavigator();
const RootTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        swipeEnabled: false,
        tabBarIconStyle: {alignItems: 'center'},
        tabBarOptions: {
          activeTintColor: colors.primary.green,
          inactiveTintColor: '#fff',
        },
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === screenName.HomeTab) {
            iconName = focused
              ? AppIcon.homeTabIconActive
              : AppIcon.homeTabIconInActive;
          } else if (route.name === screenName.AccountTab) {
            iconName = focused
              ? AppIcon.accountTabIconActive
              : AppIcon.accountTabIconInActive;
          } else if (route.name === screenName.MoreTab) {
            iconName = focused
              ? AppIcon.moreTabIconActive
              : AppIcon.moreTabIconInActive;
          }
          return (
            <AppImageSvg
              source={iconName}
              height={pxScale.hp(18)}
              width={pxScale.wp(16)}
            />
          );
        },
      })}
      tabBarPosition="bottom"
      keyboardDismissMode="auto">
      <Tab.Screen name={screenName.HomeTab} component={Home} />
      <Tab.Screen name={screenName.AccountTab} component={Account} />
      <Tab.Screen name={screenName.MoreTab} component={More} />
    </Tab.Navigator>
  );
};
export default RootTabNavigator;
