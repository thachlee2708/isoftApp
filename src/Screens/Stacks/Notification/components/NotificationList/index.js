import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Platform,
  Pressable,
  Animated,
} from 'react-native';
import React, {memo, useRef} from 'react';
import {pxScale} from '../../../../../Helpers';
import styles from './styles';
import AppImageSvg from '../../../../../components/AppImageSvg';
import {formatDay} from '../../../../../Helpers';
import {colors, fontFamily} from '../../../../../constants';
const NotificationList = ({data}) => {
  const flatListRef = React.useRef();
  const onpressItem = React.useCallback(item => {}, []);
  const renderItems = React.useCallback(({item, index}) => {
    return (
      <View style={{flex: 1}}>
        <Text>{formatDay(item[0].date)}</Text>
        {item.map((item, index) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: pxScale.wp(10),
              }}>
              <AppImageSvg
                source={item.icon}
                width={pxScale.wp(30)}
                height={pxScale.wp(30)}
              />
              <Text
                numberOfLines={2}
                style={{
                  maxWidth: pxScale.wp(330),
                  maxHeight: pxScale.hp(60),
                  fontFamily: item.read
                    ? fontFamily.InterRegular
                    : fontFamily.InterBold,
                  color: colors.primary.black,
                  fontSize: pxScale.fontSize(18),
                  marginLeft: pxScale.wp(15),
                }}>
                {item.title}
              </Text>
            </View>
          );
        })}
      </View>
    );
  });
  return (
    <View style={{height: pxScale.hp(550), marginTop: pxScale.hp(20)}}>
      <FlatList
        ref={flatListRef}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={renderItems}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{
          paddingBottom: pxScale.hp(30),
        }}
      />
    </View>
  );
};
export default memo(NotificationList);
