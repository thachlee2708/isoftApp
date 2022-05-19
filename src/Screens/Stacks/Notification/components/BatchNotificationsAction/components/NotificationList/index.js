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
import styles from './styles';
import AppImageSvg from '../../../../../../../components/AppImageSvg';
import {formatDay} from '../../../../../../../Helpers';
import {pxScale} from '../../../../../../../Helpers';
import {fontFamily} from '../../../../../../../constants';
import CheckBox from '@react-native-community/checkbox';
const NotificationList = ({
  data,
  onCheckItem,
  checkedAmount,
  onPressDoneMark,
  readOrUnread,
}) => {
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
          <CheckBox
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            boxType={'square'}
            onValueChange={onCheckItem}
          />
          <AppImageSvg
            style={{marginLeft: pxScale.wp(10)}}
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
      <View style={{paddingHorizontal: pxScale.wp(5)}}>
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
    <View style={{height: pxScale.hp(650), marginTop: pxScale.hp(20)}}>
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

      <View
        style={{
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text>{checkedAmount} Selected</Text>
        <Pressable onPress={onPressDoneMark}>
          <Text>Mark as {readOrUnread}</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default memo(NotificationList);
