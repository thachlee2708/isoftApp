import {Text, View, FlatList, Platform, Pressable} from 'react-native';
import React, {memo, useRef, useState} from 'react';
import styles from './styles';
import AppImageSvg from '../../../../../../../components/AppImageSvg';
import {formatDay} from '../../../../../../../Helpers';
import {pxScale} from '../../../../../../../Helpers';
import {colors, fontFamily} from '../../../../../../../constants';
import CheckBox from '../CheckBox';
import {useDispatch, useSelector} from 'react-redux';
import {
  UPDATE_CHECKED_AMOUNT,
  UPDATE_NOTIFICATION_LIST,
} from '../../../../../../../Redux/Notification/actions';
const NotificationList = ({data, onDoneMark, readOrUnread}) => {
  const dispatch = useDispatch();
  const [arrList, setArrList] = useState(JSON.parse(JSON.stringify(data)));
  const flatListRef = React.useRef();
  const checkedAmount = useSelector(
    rootState => rootState.notificationReducer?.checkedAmount,
  );
  const onPressDoneMark = React.useCallback(() => {
    dispatch({
      type: UPDATE_NOTIFICATION_LIST,
      payload: [...arrList],
    });
    onDoneMark();
  }, [dispatch, arrList, onDoneMark]);
  const renderItems = React.useCallback(
    ({item, index}) => {
      const renderItemline = ({item}) => {
        const onValueChange = value => {
          value
            ? dispatch({
                type: UPDATE_CHECKED_AMOUNT,
                payload: checkedAmount + 1,
              })
            : dispatch({
                type: UPDATE_CHECKED_AMOUNT,
                payload: checkedAmount - 1,
              });
          if (readOrUnread === 'read' && value == true) {
            item.read = true;
          }
          if (readOrUnread === 'read' && value == false) {
            item.read = false;
          }
          if (readOrUnread === 'unread' && value == true) {
            item.read = false;
          }
          if (readOrUnread === 'unread' && value == false) {
            item.read = true;
          }
        };
        return (
          <View style={styles.container}>
            <CheckBox onValueChange={onValueChange} />

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
    },
    [arrList, dispatch, checkedAmount, readOrUnread],
  );
  return (
    <View
      style={{
        height: Platform.OS === 'ios' ? pxScale.hp(680) : pxScale.hp(750),
        marginTop: pxScale.hp(20),
      }}>
      <FlatList
        ref={flatListRef}
        data={arrList}
        showsVerticalScrollIndicator={false}
        renderItem={renderItems}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{
          paddingBottom: pxScale.hp(80),
        }}
      />

      <View style={styles.footerContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: colors.primary.green,
              fontFamily: fontFamily.InterBold,
              fontSize: pxScale.fontSize(18),
            }}>
            {checkedAmount}
          </Text>
          <Text style={styles.bottomTextLeft}> Selected</Text>
        </View>

        <Pressable style={styles.markButtonContainer} onPress={onPressDoneMark}>
          <Text style={styles.bottomTextRight}>Mark as {readOrUnread}</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default memo(NotificationList);
