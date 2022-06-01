import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {AppIcon} from 'assets/icons';
import AppImageSvg from 'components/AppImageSvg';
import {colors, screenName} from 'constants';
import {pxScale} from 'Helpers';
import Account from 'Screens/Tabs/RootTab/Account';
import More from 'Screens/Tabs/RootTab/More';
import HomeStack from 'StackNavigator/HomeStack';
import {useSelector} from 'react-redux';
const Tab = createMaterialTopTabNavigator();
const RootTabNavigator = () => {
  const token = useSelector(rootState => rootState.authReducer?.token);
  return (
    <Tab.Navigator
      backBehavior={'none'}
      labelStyle={colors.primary.green}
      screenOptions={({route}) => ({
        headerShown: false,
        swipeEnabled: false,
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarIconStyle: {alignItems: 'center', justifyContent: 'center'},
        tabBarLabelStyle: {
          textTransform: 'none',
          fontSize: pxScale.fontSize(16),
          marginBottom: pxScale.hp(20),
        },
        tabBarActiveTintColor: colors.primary.green,
        tabBarInactiveTintColor: '#979797',
        tabBarIcon: ({focused}) => {
          let iconSource;
          switch (route.name) {
            case screenName.HomeTab: {
              iconSource = focused
                ? AppIcon.homeTabIconActive
                : AppIcon.homeTabIconInActive;
              break;
            }
            case screenName.AccountTab: {
              iconSource = focused
                ? AppIcon.accountTabIconActive
                : AppIcon.accountTabIconInActive;
              break;
            }
            case screenName.MoreTab: {
              iconSource = focused
                ? AppIcon.moreTabIconActive
                : AppIcon.moreTabIconInActive;
              break;
            }
            default:
              break;
          }
          return (
            <AppImageSvg
              source={iconSource}
              height={pxScale.hp(27)}
              width={pxScale.wp(24)}
            />
          );
        },
      })}
      tabBarPosition="bottom"
      keyboardDismissMode="auto">
      <Tab.Screen name={screenName.HomeTab} component={HomeStack} />
      <Tab.Screen name={screenName.AccountTab} component={Account} />
      <Tab.Screen name={screenName.MoreTab} component={More} />
    </Tab.Navigator>
  );
};
export default RootTabNavigator;
