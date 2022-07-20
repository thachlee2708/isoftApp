import React from 'react';
import {Image, View, Text, TouchableOpacity, Platform} from 'react-native';
import {AppImage} from 'assets/images';
import {pxScale} from 'Helpers';
import styles from './styles';
import {colors} from 'constants';
const LeavesTaken = ({listLeaveTaken}) => {
  const RenderItem = ({item}) => {
    const [showToolTip, setShowToolTip] = React.useState(false);
    return (
      <View
        style={{
          paddingBottom: pxScale.hp(10),
          paddingHorizontal: pxScale.hp(5),
        }}>
        <View style={styles.wrap}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setShowToolTip(!showToolTip)}>
            <View
              style={{
                paddingVertical: pxScale.wp(8),
                paddingHorizontal: pxScale.wp(10),
                flexDirection: 'row',
                alignItems: 'center',
                borderLeftWidth: pxScale.wp(3),
                borderColor: ['BFL', '2nd - AL', 'AL'].includes(item.type)
                  ? colors.primary.green
                  : colors.label['text-EF6C00'],
              }}>
              <Text style={[styles.text, {flex: 1}]}>{item.name}</Text>
              <View
                style={{
                  backgroundColor: ['BFL', '2nd - AL', 'AL'].includes(item.type)
                    ? '#D9ECDA'
                    : '#FCDCDC',
                  height: pxScale.hp(30),
                  maxWidth: pxScale.wp(100),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: pxScale.wp(40),
                }}>
                <Text
                  style={[
                    styles.text,
                    {
                      color: ['BFL', '2nd - AL', 'AL'].includes(item.type)
                        ? '#43A047'
                        : colors.label['text-EF6C00'],
                    },
                  ]}>
                  {item.type}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {showToolTip && (
          <View
            style={{
              top: Platform.OS === 'ios' ? pxScale.hp(-125) : pxScale.hp(-155),
              position: 'absolute',
              alignSelf: 'center',
              alignItems: 'center',
              height: pxScale.hp(190),
              width: pxScale.wp(210),
            }}>
            <View
              style={{
                padding: pxScale.wp(10),
                paddingRight: pxScale.wp(20),
                borderRadius: pxScale.wp(8),
                backgroundColor: colors.primary.green,
              }}>
              <Text style={styles.textToolTip}>
                {item.name}
                {'\n'}[(1st Half) Unpaid Leave]
              </Text>
              <View
                style={{
                  borderColor: colors.primary.white,
                  borderWidth: pxScale.hp(0.5),
                  width: pxScale.wp(215),
                  height: 0,
                }}></View>
              <Text style={styles.textToolTip}>
                Half Day: (1st Half){'\n'}
                Status: Approved{'\n'}
                Remark: Personal
              </Text>
            </View>
            <View style={styles.triangle}></View>
          </View>
        )}
      </View>
    );
  };
  return (
    <View style={{marginTop: pxScale.hp(20)}}>
      {listLeaveTaken?.length === 0 && (
        <View style={{alignItems: 'center'}}>
          <Image
            source={AppImage.calendarEmpty}
            style={{height: pxScale.hp(100), width: pxScale.hp(100)}}
          />
          <Text style={[styles.text, {marginTop: pxScale.hp(10)}]}>
            No leaves taken for this week
          </Text>
        </View>
      )}
      {listLeaveTaken?.length > 0 &&
        listLeaveTaken.map(item => {
          return <RenderItem item={item} />;
        })}
    </View>
  );
};
export default React.memo(LeavesTaken);
