import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Platform,
  Pressable,
  SafeAreaView,
  Animated,
} from 'react-native';
import React, {memo, useRef} from 'react';
import {pxScale} from '../../../../../Helpers';
import styles from './styles';
import AppImageSvg from '../../../../../components/AppImageSvg';
import {formatDay} from '../../../../../Helpers';
import {colors, fontFamily} from '../../../../../constants';
import CheckBox from '@react-native-community/checkbox';
const NotificationList = ({data, isShowCheckbox, onCheckItem}) => {
  const flatListRef = React.useRef();
  const onpressItem = React.useCallback(item => {}, []);
  const renderItems = React.useCallback(({item, index}) => {
    const renderItemline = ({item, indexLine}) => {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: pxScale.wp(10),
          }}>
          {isShowCheckbox && (
            <CheckBox onValueChange={onCheckItem(index, indexLine)} />
          )}
          <AppImageSvg
            source={item.icon}
            width={pxScale.wp(30)}
            height={pxScale.wp(30)}
          />
          <Text
            numberOfLines={2}
            style={[
              styles.titleText,
              {
                fontFamily: item.read
                  ? fontFamily.InterRegular
                  : fontFamily.InterBold,
              },
            ]}>
            {item.title}
          </Text>
        </View>
      );
    };
    return (
      <View style={{flex: 1}}>
        <Text>{formatDay(item[0].date)}</Text>
        <FlatList
          scrollEnabled={false}
          data={item}
          renderItem={renderItemline}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    );
  });
  return (
    <SafeAreaView style={{height: pxScale.hp(600), marginTop: pxScale.hp(20)}}>
      <FlatList
        ref={flatListRef}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={renderItems}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{
          paddingBottom: pxScale.hp(80),
        }}
      />
    </SafeAreaView>
  );
};
export default memo(NotificationList);
